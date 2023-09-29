import { createUser, findAllUSers } from "../models/UserModel.js";

export async function ctrlCreateUser(req, res) {

    const userData = req.body

    try {

        const userCreated = await createUser(userData)

        if (userCreated) {
            res.status(200).json({
                message: "Usuario creado correctamente",
            })
        }
    } catch (error) {
        console.log("Error al crear usuario", error);
        res.sendStatus(500)
    }
};


export async function ctrlFindAllUsers(req, res){
    try {
        const users = await findAllUSers()
    } catch (error) {
        console.log("Error al contrar usuarios", error);
    }
}