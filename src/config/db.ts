import mongoose, { mongo } from "mongoose"
import { configs } from "./index"
import logger from "./logger";

export const connectDb = async ()=>{
 try {
       const url = configs.mongodb ;
   
       if(!url) return ; 
   
       await mongoose.connect(url) 

       logger.info("Mongo db connected sucess ")
 } catch (error) {

    logger.error("Mongo db connection error",error)
    
 }
}