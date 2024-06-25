import jwt from "jsonwebtoken"
import {SECRET} from "../config/config.js"

export const generateToken = (payload)=> {
     const token = jwt.sign({payload}, SECRET)
     return token
}

export const verifyToken = (token) =>{
     const verify = jwt.verify(token,SECRET)
     return verify
}