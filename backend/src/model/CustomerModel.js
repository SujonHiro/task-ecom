const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        cus_email:{type:String,unique:true,required:true},
        cus_name:{type: String,required:true},
        cus_mobile:{type:String,required:true},
    },
    {timestamps:true,versionKey:false}
)
const CustomerModel=mongoose.model('customers',DataSchema);
module.exports=CustomerModel;