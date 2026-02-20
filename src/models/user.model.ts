import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    password:String,
    age:Number,
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }

},{timestamps:true})



export const User =  mongoose.model("User",userSchema);