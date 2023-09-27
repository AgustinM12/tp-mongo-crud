import mongoose from "mongoose";

export const connectMongoDB = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/database_prueba")
        console.log("Conexion exitosa a la db");
    } catch (error) {
        console.log("Error al conectarse a la base de datos", error);
    }
}