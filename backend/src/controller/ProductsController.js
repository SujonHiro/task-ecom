
const ProductModel = require("../model/ProductModel");
exports.createProduct=async (req,res)=>{
    try {
        const admin_id = req.headers.admin_id;
        const productData=req.body;
        if (!admin_id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Assign admin_id to customer data
        productData.admin_id = admin_id;
        const result = await ProductModel.create(productData);

        res.status(200).json({
            message: "Success",
            data: result // Return the created customer object
        })
    }catch (error) {
        res.status(400).json({
            message: "Fail",
            data: error
        });
    }
}

exports.getProducts=async (req,res)=>{
    try{
        const products=await ProductModel.find()
        res.status(200).json({
            message: "Success",
            data: products // Return the created customer object
        })
    }catch (error) {
        res.status(400).json({
            message: "Fail",
            data: error
        });
    }
}