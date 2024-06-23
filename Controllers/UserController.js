import {User,Review,Movie} from "../Models/models.js"

class UserController{

async getUsers(req,res){
    try {
        const usuarios = await User.findAll({
            attributes:["userId","name","email"]})
        res.status(200).send({success:true,message:usuarios})
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
} 

async getUserId(req,res){
    try {
        const {userId}= req.params;
        const usuario = await User.findOne({
            attributes:["userId","name","email"],
            where:{
                userId:userId
            },
            include:[
                {
                    model:Review,
                    attributes:["reviewId","rating","comment","movieId"],//Ver si me sirve el id tanto del Review como de Movie
                    include:[
                        {
                            model:Movie,
                            attributes:["titulo"],
                        }
                    ]
                }
            ]
        })
        if(!usuario){
            return res.status(404).send({ success: false, message: "Usuario no encontrado" });
        } 
        res.status(200).send({success:true,message:usuario})
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}
//post
async createUser(req,res){
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
        }
        const newUser = await User.create({name,email,password})
        res.status(201).send({success:true,message:"user created",user:newUser})  
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}

async updateUser(req,res){
    try {
        const {userId} = req.params
        const {name,email,password} =req.body;
        const [update] = await User.update({name,email,password},{where:{userId}})
        if(update){
            res.status(200).send({ success: true, message: "Usuario modificado" });
        }else{
            res.status(404).send({ success: false, message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}

async deleteUser(req,res){
    try {
        const {userId} = req.params;
        const deleted = await User.destroy({
            where: {
                userId:userId,
            }
        })
        if (deleted){
            res.status(200).send({success:true,message:"Usuario borrado"})
        }else{
            res.status(404).send({ success: false, message: "Usuario no encontrado" });
        }
        
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

}

export default UserController;