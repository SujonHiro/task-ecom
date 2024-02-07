const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
        title:{type:String,trim:true,required:true},
        price:{type:String,trim:true,required:true},
        image:{type:String,trim:true,required:true},
        stock:{type:String,trim:true,required:true},
        categoryID:{type:mongoose.Schema.Types.ObjectId,required:true},
        brandID:{type:mongoose.Schema.Types.ObjectId,required:true},
    },
    {timestamps:true,versionKey:false}
)
const ProductModel=mongoose.model('products',DataSchema);
module.exports=ProductModel;
