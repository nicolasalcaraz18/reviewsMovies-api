import {Router} from "express"

const reviewRoutes = Router()

reviewRoutes.post("/",(req,res)=>{
    res.send("post reviews")
})

reviewRoutes.get("/:id",(req,res)=>{
    res.send("get review by id")
})

reviewRoutes.put("/:id",(req,res)=>{
    res.send("update review by id")
})

reviewRoutes.delete("/:id",(req,res)=>{
    res.send("delete review by id")
})

export default reviewRoutes