import jwt from "jsonwebtoken"
import {SECRET} from "../config/config.js"
/**
 * 
 * @param {*} payload información que se incluirá en el token
 * @returns {String} token - el token JWT generado.
 */
export const generateToken = (payload)=> {
     const token = jwt.sign({payload}, SECRET)
     return token
}

/**
 * 
 * @param {*} token - token JWT a verificar.
 * @returns {object} verify - información decodificada del token
 */
export const verifyToken = (token) =>{
     const verify = jwt.verify(token,SECRET)
     return verify
}