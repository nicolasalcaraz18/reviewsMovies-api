import { verifyToken } from "../utils/token.js"

export const validateLogin = async (error,req, res, next) =>{
   try {
        const {token} = req.cookies
        if(!token){
            throw new Error("token invalid")
        }
        req.user=payload
        next()
        const {payload} = verifyToken(token) 
   } catch (error) {
        res.status(400).send({success:false,message:error.message})
   }
}