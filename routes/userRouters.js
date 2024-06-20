import {Router} from "express"
import UserController from "../Controllers/UserController.js"

const userRoutes = Router()
const userController= new UserController()

userRoutes.get("/",userController.getUsers)

userRoutes.get("/:id",userController.getUserId)

userRoutes.post("/",userController.createUser)

userRoutes.put("/:id",userController.updateUser)

userRoutes.delete("/:id",userController.deleteUser)

export default userRoutes