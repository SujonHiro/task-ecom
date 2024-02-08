const userModel=require("../model/UserModel")
exports.userReg=async (req,res)=>{
    try {
        const userData=req.body;
        const user=await userModel.find({user_email:userData.user_email})
        if(user.length>0){
            return res.status(400).send("Your email already exists");
        }
        const result= await userModel.create(userData)
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
exports.userLogin=async (req,res)=>{
    const loginData=req.body
    const result=await userModel.findOne({user_email:loginData.user_email})
}