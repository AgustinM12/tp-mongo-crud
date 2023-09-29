import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    publicaciones: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Publicacion",
            }
        ],
        required: false
    }
}, {
    versionKey: false
})

export const UserModel = mongoose.model("Usuario", userSchema)


//CREAR USUARIO
export async function createUser(userData) {
    try {
        return await UserModel.create({
            nombre: userData.nombre,
            email: userData.email,
        });

    } catch (error) {
        console.log("Error al crear usuario", error)
    }
};

//BUSCAR USUARIO POR ID
export async function findUserbyId(postData) {
    try {
        return await UserModel.findById({ postData: _id })
    } catch (error) {
        console.log("Error al encontrar usuraio", error);
    }
} ;


//BUSCAR TODOS LOS USUARIOS
export async function findAllUSers(){
    try {
        return await UserModel.find()
    } catch (error) {
        console.log("Error al encontrar usuarios", error);
    }
}
