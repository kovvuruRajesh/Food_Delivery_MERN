import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,require:true},
    image: {type:String, required:true},
    category:{type:String,require:true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;