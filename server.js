const express = require('express');
const app = express();
const connectDB = require('./DB/dbConnection')
const User = require('./Model/registrationModel');
const errorMiddleware = require('./middleware/error');
const ErrorHandler = require('./utils/ErrorHandling');
connectDB();

app.use(express.json());
app.use(express.urlencoded({extends: true}))
//Error middleware
app.use(errorMiddleware);

app.post('/user/register',async(req,res,next)=>{
    const {username,password,confirmPassword} = req.body;
    if(!username || !password || !confirmPassword){
        return next(new ErrorHandler("Insufficient Information",404));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Passowrd does't match",404));
    }
    const newUser = new User({username,password,confirmPassword});
    await newUser.save();
        res.send({
            success: true,
            message:"User registered successfully"
        })
});

app.post('/user/login',async(req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return next(new ErrorHandler("Insufficient Information",404));
    }
    const user = await User.findOne({ username: { $regex: `^${username}$`, $options: 'i' } });

    console.log(user);
    if(!user){
        return next(new ErrorHandler("Username Does Not Found",404));
    }
    res.send({
        success: true,
        message:"User login successfully"
    })
})

app.listen(8081,()=>{
    console.log("Server has started");
})