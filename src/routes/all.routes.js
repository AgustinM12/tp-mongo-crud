import { Router } from "express";
import { PostModel } from "../models/PostModel.js";
import { UserModel } from "../models/UserModel.js";
import { ctrlCreateUser, ctrlFindAllUsers } from "../controllers/user.controllers.js";
import { ctrlCreatePost } from "../controllers/post.controllers.js";

const allRouter = Router();

allRouter.post("/newUser", ctrlCreateUser)

allRouter.post("/newPost", ctrlCreatePost)

allRouter.get("/find", ctrlFindAllUsers)



allRouter.get('/new', async (req, res) => {

    try {

        const publicacion1 = await PostModel.create({
            titulo: "publicacion 1",
            contenido: "contenido 1",
            autor: user._id
        })

        const publicacion2 = await PostModel.create({
            titulo: "publicacion 2",
            contenido: "contenido 2",
            autor: user._id
        })

        user.publicaciones.push(publicacion1)
        user.publicaciones.push(publicacion2)

        await user.save();

        res.status(200).json({
            message: "creado correctamente",
            user
        })

    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


allRouter.get("/getUsers", async (req, res) => {
    try {
        const user = await UserModel.find().populate("publicaciones", { createdAt: 0, updatedAt: 0 })
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

allRouter.get("/getPosts", async (req, res) => {
    try {
        const posts = await PostModel.find().populate("autor", { publicaciones: 0 })
        res.status(200).json(posts)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export { allRouter }