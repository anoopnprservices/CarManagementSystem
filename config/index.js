const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to database.");
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
}

module.exports = connectDB;