import User from "../Models/User.js"

class UserController{

async getUsers(req,res){
    try {
        const query = "SELECT usuarioId, name, email FROM user"
        const data = await database.query(query)
        console.log(data)
        res.status(200).send({success:true,message:data})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
} 

async getUserId(req,res){
    try {
        
    } catch (error) {
        
    }
}
//post
async createUser(req,res){
    try {
        const {name,email,password} = req.body;
        const result = await User.create({name,email,password})
        res.status(200).send({success:true,message:"user created"})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

async updateUser(req,res){
    try {
        
    } catch (error) {
        
    }
}

async deleteUser(req,res){
    try {
        
    } catch (error) {
        
    }
}


}

export default UserController;