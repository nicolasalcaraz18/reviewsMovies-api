import {Router} from "express"
import UserController from "../Controllers/UserController.js"

const userRoutes = Router()
const userController= new UserController()

userRoutes.get("/",userController.getUsers)

userRoutes.get("/:userId",userController.getUserId)

userRoutes.post("/",userController.createUser)

userRoutes.put("/:userId",userController.updateUser)

userRoutes.delete("/:userId",userController.deleteUser)

export default userRoutes