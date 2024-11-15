import { app } from "./app.js";
import dotenv from "dotenv"
import { connectToDB } from "./src/config/db.js";
dotenv.config()
app.listen(process.env.PORT  , async()=>{
    console.log("server  is listening  on " + process.env.PORT)
    await connectToDB()
})