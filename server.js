const express = require('express');
const app = express();
const connectDB = require('./DB/dbConnection')
const errorMiddleware = require('./middleware/error');
const user = require('./route/userRoute');
connectDB();

app.use(express.json());
app.use(express.urlencoded({extends: true}))
//Error middleware
app.use(errorMiddleware);

//Registration,Login Route
app.use('/user',user);


app.listen(8081,()=>{
    console.log("Server has started");
})