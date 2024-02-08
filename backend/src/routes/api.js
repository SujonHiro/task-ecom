const express= require("express");
const {getBrands} = require("../controller/BrandController");
const {getCategories} = require("../controller/CategoryController");
const {userReg} = require("../controller/UserController");
const router = express.Router();

router.get('/brands',getBrands);
router.get('/categories',getCategories);
router.post('/user-register',userReg);

module.exports=router;