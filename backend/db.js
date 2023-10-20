const mongoose = require('mongoose');
const mongoUri = "mongodb+srv://rohitchawdhary96:rohit96@cluster0.bssvdga.mongodb.net/";

mongoose.set("strictQuery", false);
const connecttoMongo = () => {
    mongoose.connect(mongoUri, ()=> {
    console.log("Connected to MongoDB Successfully!");
   });
}


module.exports = connecttoMongo;