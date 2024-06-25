import { DataTypes,Model } from "sequelize";
import database from "../connection/connection.js";
import bcrypt from "bcrypt"

class User extends Model{

    comparePassword=async (password) =>{
        return await bcrypt.compare(password,this.password)
    }
}

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

User.beforeCreate(async (user) => {
    const genSalt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, genSalt);
    user.password = hashedPassword;
  });

export default User;
