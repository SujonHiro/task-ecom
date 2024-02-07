const express= require("express");
const router = express.Router();

const WelcomeController=require("../controller/WelcomeController")


// Define route for "/WelcomeAPI" endpoint
router.get('/welcome',WelcomeController.WelcomeController);

module.exports=router;