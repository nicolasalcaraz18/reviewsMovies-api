import { Sequelize } from "sequelize"
import {DB_NAME,DB_USER,DB_PASSWORD,DB_HOST,DB_DIALECT,DB_PORT} from "../config/config.js"

const database= new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect:DB_DIALECT,
    port:DB_PORT
})

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default database;


