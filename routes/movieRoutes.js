import { Router } from "express";

const movieRoutes = Router()

movieRoutes.post("/",(req,res)=>{
    res.send("post movie")
})

movieRoutes.get("/:id",(req,res)=>{
    res.send("get movie by id")
})

movieRoutes.put("/:id",(req,res)=>{
    res.send("update movie by id")
})

movieRoutes.delete("/:id",(req,res)=>{
    res.send("delete movie by id")
})

export default movieRoutes