import express from "express";
import { userRoutes } from "./src/features/users/user.routes.js";
import cookieParser from "cookie-parser";
import { movieRoutes } from "./src/features/movies/movies.routes.js";
import cors from "cors"
 const app = express()
 app.use(cors({origin:'http://localhost:3000',credentials: true}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/user", userRoutes)
app.use("/api/movies", movieRoutes)
export {app}