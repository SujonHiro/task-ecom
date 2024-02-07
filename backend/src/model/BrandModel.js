const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
        brandName:{
            type:String,
            trim:true,
            required:true,
            unique:true
        }
    },
    {timestamps:true,versionKey:false}
)

const BrandModel=mongoose.model('brands',DataSchema);
module.exports=BrandModel;