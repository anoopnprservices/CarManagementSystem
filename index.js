const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

// Setting view engine 
app.set('view engine', 'ejs');
app.set('views','views');

// Database connection instances 
const connectDB = require('./config/index');
connectDB()
.then(()=>{
    console.log("Connecting to MongoDB...");
})
.catch((error)=>{
    console.log("Error connecting to MongoDB database", error);
});

// All Routes here 

app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
})