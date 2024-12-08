import express from "express";
import { userRoutes } from "./src/features/users/user.routes.js";
import cookieParser from "cookie-parser";
import { movieRoutes } from "./src/features/movies/movies.routes.js";
import dotenv, { config } from "dotenv"
dotenv.config()
import cors from "cors"
import session from "express-session";
const app = express()
app.use(cors({ origin: 'http://localhost:3001' , credentials:true
}))
app.use(session({
    name:'jwt',
    secret:process.env.session_secret_key,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.get("/" , (req,res)=>{
   res.send("Server is running")
})
app.use(cookieParser())
app.use(express.json())
app.use("/api/user", userRoutes)
app.use("/api/movies", movieRoutes)
export { app }