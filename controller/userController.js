const User = require('../Model/registrationModel');
const ErrorHandler = require('../utils/ErrorHandling');

exports.registerNewUser = async(req,res,next)=>{
    const {username,password,confirmPassword} = req.body;
    if(!username || !password || !confirmPassword){
        return next(new ErrorHandler("Insufficient Information",404));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Passowrd does't match",404));
    }
    try {
        const isUser = await User.findOn({ username: { $regex: `^${username}$`, $options: 'i' } });
        console.log("IS ", isUser);
    
        if (isUser) {
          return next(new ErrorHandler("Username already found", 404));
        }}catch(err){
            console.log(err)
        }
    const newUser =  new User({username,password,confirmPassword});
    await newUser.save();
        res.status(200).json({
            success: true,
            message:"User registered successfully"
        })
};

exports.loginUser = async(req,res,next)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return next(new ErrorHandler("Insufficient Information",404));
    }
    const user = await User.findOne({ username: { $regex: `^${username}$`, $options: 'i' } });

    if(!user){
        return next(new ErrorHandler("Username Does Not Found",404));
    }else if(password !== user.password){
        return next(new ErrorHandler("Either email or password is wrong",404));
    }

    res.status(200).json({
        success: true,
        message:"User login successfully"
    })
};