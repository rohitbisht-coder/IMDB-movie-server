import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connectToDB = async()=>{
   try{
    await mongoose.connect(process.env.MONGODB , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB connected successfully")
   }catch(err){
    console.log(err)
   }
}