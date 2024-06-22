import { DataTypes,Model } from "sequelize";
import database from "../connection/connection.js";

class Review extends Model{}

Review.init({
    reviewId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    rating:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    sequelize:database,
    modelName:"Review"
})

export default Review