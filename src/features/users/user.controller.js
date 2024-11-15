import { customErrorHandler } from "../../middlewares/errorHandler.js";
import userRepository from "./user.repository.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
export default class userController {
    constructor(){
        this.userController = new userRepository()
    }

    signUp=async(req,res,next)=>{
        let password = req.body.password.toString();
        password = await bcrypt.hash(password, 12);
        const resp = await this.userController.createUser({ ...req.body, password });
       
        if (resp.success) {
            res.status(201).json({
                success: true,
                msg: "Registration successful",
                res: resp.res,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }
    signIn = async (req, res, next) => {
        let { email, password } = req.body;
        password = password.toString()
        const userData = { email, password };
        const resp = await this.userController.loginUser(userData);
        if (resp.success) {
            const token = jwt.sign({ _id: resp._id , user:resp.res._id}, "rfiwugjwij2938g3929fj92jr3939fwol", {
                expiresIn: "1h"
            })
            res
                .cookie("jwtToken", token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true })
                .json({ success: true, msg: "Login successful", token , user:resp.res });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    addMovie = async (req, res, next) => {
        const {poster , name , userId ,movieId} = req.body
        const resp = await this.userController.addMovieToFav(poster ,name,userId , movieId);
        if (resp.success) {
            res.status(201).json({
                success: true,
                msg: "Movie Added",
                res: resp.res,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
       
    }
    
    removeMovie = async (req, res, next) => {
        const {userId , movieId} = req.body
        const resp = await this.userController.removeMovieFromFav(userId , movieId);
        if (resp.success) {
            res.status(200).json({
                success: true,
                msg: "Movie Removed",
                res: resp.res,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    getFavMovie = async (req, res, next) => {
        const {userId} = req.params
        const resp = await this.userController.getFavMovie(userId);
        if (resp.success) {
            res.status(200).json({
                success: true,
                resp
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }
    
}

export const userLogout = (req, res, next) => {
    res.clearCookie("jwtToken").json({ success: true, msg: "logout successful" });
};
