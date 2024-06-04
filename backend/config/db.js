import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kovvururajesh8:7892545926@cluster0.x3agqu0.mongodb.net/food-del').then(()=>console.log("DB connected"));
}

