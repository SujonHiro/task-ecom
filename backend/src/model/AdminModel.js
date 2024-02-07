const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        email:{type:String,unique:true,required: true},
        name:{type:String,required: true},
        password:{type:String,required:true},
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('admins',DataSchema);
module.exports=UserModel;