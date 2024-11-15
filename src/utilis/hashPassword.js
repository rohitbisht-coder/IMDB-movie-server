import bcrypt from "bcrypt"
import { customErrorHandler } from "../middlewares/errorHandler.js"

export const createHashPassword = async(password , next)=>{
try{
 return await bcrypt.hash(password,12)
}catch(err){
    new customErrorHandler(400, "encounterd error in hashing password")
}
}


export const  comparePassword=async(password , hashedpassword, next)=>{
    try {
        return await bcrypt.compare(password, hashedpassword);
      } catch (error) {
        
          new customErrorHandler(
            400,
            "encounterd error in comparing hashed password"
          )
    
      }
}