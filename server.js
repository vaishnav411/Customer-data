import express from "express"
import dbconnect from "./config/db.js"
import dotenv from "dotenv"
import custRoutes from "./routes/custRoutes.js"


dotenv.config()

const app = express()

dbconnect()


app.use(express.json())




app.use("/api",custRoutes)

app.listen(3000,() => {
    console.log("Server is running on 3000");
    
})