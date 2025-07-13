import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
      name:{type:String,required:true},
      description:{type:Array,required:true,unique:true},
      price:{type:Number,required:true},
      offerPrice:{type:Number,required:true},
      image:{type:Array,required:true},
      category:{type:Array,required:true},
      inStock:{type:Boolean,default:true},
},{timestamps:true})

const User= mongoose.models.product || mongoose.model('product',productSchema)

export default product;