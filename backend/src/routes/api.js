const express= require("express");
const router = express.Router();
const {getBrands} = require("../controller/BrandController");
const {getCategories} = require("../controller/CategoryController");
const {userReg, userLogin} = require("../controller/UserController");
const {adminLogin} = require("../controller/AdminController");
const customerController = require("../controller/CustomerController");
const AuthAdmin =require("../middleware/AuthAdmin")
const ProductController = require("../controller/ProductsController");


router.get('/brands',getBrands);
router.get('/categories',getCategories);

router.post('/user-register',userReg);
router.post('/user-login',userLogin);

router.post('/admin-login',adminLogin);

router.post('/add-customer',AuthAdmin,customerController.customerCreate);
router.get('/customers',AuthAdmin,customerController.customerGet);
router.post('/add-product',AuthAdmin,ProductController.createProduct);
router.get('/products',AuthAdmin,ProductController.getProducts);

module.exports=router;