import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    titulo: String,
    contenido: String,
    autor: {
        type: mongoose.Types.ObjectId,
        ref: "Usuario"
    }

}, {
    timeseries: true,
    versionKey: false
})

export const PostModel = mongoose.model("Publicacion", postSchema)