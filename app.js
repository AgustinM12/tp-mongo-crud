import express from "express";
import morgan from "morgan";
import { connectMongoDB } from "./src/config/connection.js"
import { allRouter } from "./src/routes/all.routes.js";

const app = express()
app.use(express.json())

app.use(morgan("dev"))
app.use(allRouter)

const PORT = 5000

app.listen(PORT, () => {
    connectMongoDB()
    console.log(`Servidor en localhost:${PORT}`)
});