import {Router} from "express"
import UserController from "../Controllers/UserController.js"
import { validateLogin } from "../middleware/validateLogin.js"

const userRoutes = Router()
const userController= new UserController()

userRoutes.get("/",userController.getUsers)

userRoutes.get("/me",validateLogin,userController.me)

userRoutes.get("/:userId",userController.getUserId)

userRoutes.post("/",userController.createUser)

userRoutes.post("/login",userController.login)

userRoutes.put("/:userId",userController.updateUser)

userRoutes.delete("/:userId",userController.deleteUser)

export default userRoutes