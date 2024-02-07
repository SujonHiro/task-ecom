const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        user_email:{type:String,unique:true,required:true},
        user_name:{type: String,required:true},
        user_mobile:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('users',DataSchema);
module.exports=UserModel;