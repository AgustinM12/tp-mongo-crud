import { createPost } from "../models/PostModel";

export async function ctrlCreatePost(req, res) {
    
    const postData = req.body

    try {  

        

        const postCreated = await createPost(postData)

        if (userCreated) {
            res.status(200).json({
                message: "Post creado correctamente",
            })
        }
    } catch (error) {
        console.log("Error al crear post", error);
        res.sendStatus(500)
    }
};