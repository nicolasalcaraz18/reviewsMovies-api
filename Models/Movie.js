import { DataTypes,Model } from "sequelize";
import database from "../connection/connection.js";

class Movie extends Model{}

Movie.init({
    movieId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    año_de_lanzamiento:{
        type:DataTypes.INTEGER, 
        allowNull:false,
    }
},{
    sequelize:database,
    modelName:"Movie"
})

export default Movie