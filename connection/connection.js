import mysql from 'mysql2/promise'

const connection = async () => {
    try {
        const connection= await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'proyect_movies_db',
            port:'3306'
        })
        const ok = await connection.connect()
        if(ok){
            console.log("conexion_ok")
            return connection
        }
    } catch (error) {
        console.log("Error de conexion " + error)
    }
}

const database = await connection();
export default database;


