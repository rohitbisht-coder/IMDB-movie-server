import jwt from "jsonwebtoken";
import { customErrorHandler } from "./errorHandler.js";
import dotenv from "dotenv"
import { userModel } from "../features/users/user.repository.js";
dotenv.config()
export const jwtAuth = async (req, res, next) => {
  const  jwtToken =req.session.token ;
  if (!jwtToken) {
    return ;
  }
  jwt.verify(jwtToken, process.env.jwt_secret_key, async(err, data) => {
    if (err) {
      res.status(400).send("unauthorized! login to continue!");
    }else{
      const user = await userModel.findById(data.user)
      req.user= user
      next()
    }
  });
};

