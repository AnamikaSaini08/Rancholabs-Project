const ErrorHandler = require('../utils/ErrorHandling');

module.exports =(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error(defined)';
    res.status(err.statusCode).json({
        success: false,
        error: err,
    });
};