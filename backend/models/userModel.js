import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}

},{minimize:false})



//if model is not created for user it will create if it already exist then it will use that model
const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;