const userModel=require("../model/UserModel")
const {EncodeToken}=require("../utility/TokenHelper")
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
exports.userLogin = async (req, res) => {
    const { user_email } = req.body;
    try {
        const user = await userModel.findOne({ user_email: user_email });

        if (!user) {
            return res.status(401).json({ message: 'User Not Found' });
        }
        // Extract email and user_id correctly
        const { email, _id: user_id } = user;
        // Generate token
        let token = EncodeToken(email, user_id.toString());
        // Set cookie
        let cookieOption = { expires: new Date(Date.now() + 24 * 6060 * 1000), httpOnly: false };
        res.cookie('token', token, cookieOption);
        // Respond with token or success message
        res.status(200).json({
            message: "Success",
            token: token // or just message: "Success" if you don't want to return the token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
