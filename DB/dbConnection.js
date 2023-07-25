const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://anamikarancholabs:NnBiwYPRKJJytHUG@cluster0.w7fayj2.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("DB connected")
  } catch (err) {
    console.log("Mongodb error- ", err);
  }
};
module.exports = connectDB;
