import express from "express"
import userController, { userLogout } from "./user.controller.js"
import { auth } from "../../middlewares/jwtAuth.js"

export const userRoutes = express.Router()
const UserController = new userController()

userRoutes.route("/signup").post(UserController.signUp)
userRoutes.route("/signin").post(UserController.signIn)
userRoutes.route("/getAuth").post(auth)
userRoutes.route("/logout").post(userLogout)
userRoutes.route("/addMovie").post(UserController.addMovie)
userRoutes.route("/removeMovie").post(UserController.removeMovie)
userRoutes.route("/favMovies/:userId").get(UserController.getFavMovie)