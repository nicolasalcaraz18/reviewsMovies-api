import { verifyToken } from "../utils/token.js"
/**
 * Middleware que se encarga de válidar el token JWT y autenticar al usuario.
 * @param{function} next- función de callback para ejecutar el siguiente middleware.
 */
export const validateLogin = async (req, res, next) =>{
   try {
        const {token} = req.cookies
        if(!token){
            throw new Error("token invalid")
        }
        const {payload} = verifyToken(token) 
        req.user=payload
        next()
        
   } catch (error) {
        res.status(400).send({success:false,message:error.message})
   }
}