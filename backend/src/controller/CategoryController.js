const categoryModel=require("../model/CategoryModel")
exports.getCategories=async (req,res)=>{
    try{
        const result=await categoryModel.find()
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