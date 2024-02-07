
const express=require("express")
const app = express();
const mongoose=require("mongoose")
const router=require("./src/routes/api")
const rateLimit = require('express-rate-limit');
const helmet=require('helmet');
const hpp= require ('hpp');
const cors=require('cors');

require("dotenv").config()


// Middleware
app.use(cors());
app.use(helmet());
app.use(hpp());

// Body parsing middleware with increased limit
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ limit:"50mb" }));


// Rate limiting middleware
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_CONNECTION, {autoIndex: true})
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

// API routes
app.use("/api/v1", router);

// Serve static assets for React front end
//app.use(express.static('client/dist'));

// Serve React front end for all routes not handled by the API


app.get('*', (req, res) => {
    res.status(404).json({status:'Fail',data:"Not Found"})
});

module.exports = app;
