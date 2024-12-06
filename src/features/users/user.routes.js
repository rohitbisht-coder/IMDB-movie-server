import express from "express"
import userController, { auth, userLogout } from "./user.controller.js"
import { jwtAuth } from "../../middlewares/jwtAuth.js"

export const userRoutes = express.Router()
const UserController = new userController()

userRoutes.route("/signup").post(UserController.signUp)
userRoutes.route("/signin").post(UserController.signIn)
userRoutes.route("/getAuth").get(jwtAuth, auth)
userRoutes.route("/logout").post(userLogout)
userRoutes.route("/addMovie").post(jwtAuth,UserController.addMovie)
userRoutes.route("/removeMovie").post(jwtAuth,UserController.removeMovie)
userRoutes.route("/favMovies").get(jwtAuth , UserController.getFavMovie)