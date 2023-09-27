import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    publicaciones: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Publicacion"
        }
    ]
}, {
    versionKey: false
})
export const UserModel = mongoose.model("Usuario", userSchema)
