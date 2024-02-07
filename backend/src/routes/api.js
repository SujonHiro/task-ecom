const express= require("express");
const {getBrands} = require("../controller/BrandController");
const {getCategories} = require("../controller/CategoryController");
const router = express.Router();

router.get('/brands',getBrands);
router.get('/categories',getCategories);

module.exports=router;