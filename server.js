const express = require('express');
const app = express();
const connectDB = require('./DB/dbConnection')
const User = require('./Model/registrationModel');
connectDB();

app.use(express.json());
app.use(express.urlencoded({extends: true}))

app.post('/user/register',async(req,res)=>{
    console.log("-- ",req.body);
    const {username,password,confirmPassword} = req.body;
    if(!username || !password || !confirmPassword){
        return res.send({
            success:false,
            message:"Insufficient Information"
        })
    }
    if(password !== confirmPassword){
        return res.send({
            success:false,
            message:"Passowrd does't match"
        })
    }
    const newUser = new User({username,password,confirmPassword});
    await newUser.save();
        res.send({
            success: true,
            message:"User registered successfully"
        })
});

app.post('/user/login',async(req,res)=>{
    console.log("Bofu ",req.body);
    const {username, password} = req.body;
    if(!username || !password){
        return res.send({
            success:false,
            message:"Insufficient Information"
        })
    }
    const user = await User.findOne({ username: { $regex: `^${username}$`, $options: 'i' } });

    console.log(user);
    if(!user){
        return res.send({
            success:false,
            message:"Username Does Not Found"
        })
    }
    res.send({
        success: true,
        message:"User login successfully"
    })
})

app.listen(8081,()=>{
    console.log("Server has started");
})