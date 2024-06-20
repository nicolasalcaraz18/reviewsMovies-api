import express from "express"
import routes from "./routes/routes.js"
import morgan from "morgan"
import database from "./connection/connection.js"

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(morgan("tiny"))
app.use(routes)


app.use((req,res)=>{
    res.status(404).send({success:false,message:"not found"})
})

await database.sync({force:false})

app.listen(8080,()=>{
    console.log("servidor_express_ok:) - http://localhost:8080")
})
