const brandModel=require("../model/BrandModel")
exports.getBrands=async (req,res)=>{
    try{
        const result=await brandModel.find()
        res.status(200).json({
            message:"Success",
            data:result
        })
    }catch (error) {
        res.status(400).json({
            message:"Fail",
            data:error
        })
    }
}