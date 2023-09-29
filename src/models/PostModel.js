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


//CREAR POSTS
export async function createPost(postData) {



    
    try {
        return await PostModel.findByIdAndUpdate({
            titulo: postData.titulo,
            contenido: postData.contenido,
            autor: postData._id
        });

postData._id

    } catch (error) {
        console.log("Error al crear usuario", error)
    }
};