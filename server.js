import { app } from "./app.js";
import dotenv from "dotenv"
import https from "https"
import fs from "fs"
import { connectToDB } from "./src/config/db.js";
dotenv.config()
const option = {
    key:fs.readFileSync("Certificates/private.key"),
    cert:fs.readFileSync("Certificates/server.crt")
}
https.createServer(option, app).listen(process.env.PORT  , async()=>{
    console.log("server  is listening  on " + process.env.PORT)
    await connectToDB()
})
