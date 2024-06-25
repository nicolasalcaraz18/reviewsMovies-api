import {Router} from "express"
import UserController from "../Controllers/UserController.js"
import { validateLogin } from "../middleware/validateLogin.js"

const userRoutes = Router()
const userController= new UserController()

userRoutes.post("/login",userController.login)

userRoutes.post("/",userController.createUser)

userRoutes.get("/me",validateLogin,userController.me)

userRoutes.use(validateLogin)

userRoutes.get("/",userController.getUsers)

userRoutes.get("/:userId",userController.getUserId)

userRoutes.put("/:userId",userController.updateUser)

userRoutes.delete("/:userId",userController.deleteUser)

export default userRoutes