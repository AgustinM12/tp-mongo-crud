import express from "express";
import morgan from "morgan";
import {connectMongoDB} from "./config/connection.js"
import { allRouter } from "./routes/all.routes.js";

const app = express()
app.use(morgan("dev"))
app.use(allRouter)

app.listen(5000, () => {
    connectMongoDB()
    console.log("Servidor en el puerto 5000")
});