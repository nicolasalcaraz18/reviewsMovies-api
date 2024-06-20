import {Router} from "express"
import database from "../connection/connection.js"

const userRoutes = Router()

userRoutes.get("/",(req,res)=>{
    res.send("get all user")
})

userRoutes.get("/:id",(req,res)=>{
    res.send("get by id")
})

userRoutes.post("/",(req,res)=>{
    res.send("create user")
})

userRoutes.put("/:id",(req,res)=>{
    res.send("update user")
})

userRoutes.delete("/:id",(req,res)=>{
    res.send("delete user by id")
})

export default userRoutes