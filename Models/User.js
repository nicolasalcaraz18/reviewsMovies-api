import { DataTypes,Model } from "sequelize";
import database from "../connection/connection.js";

class User extends Model{}
// por default crea al id
User.init({
    userId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize:database,
    modelName:"User"
})

export default User;
