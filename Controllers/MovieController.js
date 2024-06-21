import Movie from "../Models/Movie.js";

class MovieController{
    async createMovie(req,res){
        try {
            const {titulo,descripcion,año_de_lanzamiento} = req.body
            if(!titulo || !descripcion || !año_de_lanzamiento){
                return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
            }
            const newMovie = await Movie.create({titulo,descripcion,año_de_lanzamiento})
            res.status(201).send({success:true,message:"Pelicula creada",user:newMovie}) 
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async getMovieId(req,res){
        try {
            const {movieId} = req.params
            const movie = await Movie.findOne({where: {movieId}})
            if(!movie){
                return res.status(404).send({ success: false, message: "Pelicula no encontrada" });
            }
            res.status(200).send({success:true,message:movie})
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async updateMovie(req,res){
        try {
            const movieId = req.params;
            const {titulo,descripcion,año_de_lanzamiento}= req.body;
            const [update] = await Movie.update({titulo,descripcion,año_de_lanzamiento},{where:movieId})
            if(update){
                res.status(200).send({ success: true, message: "Pelicula modificada" });
            }else{
                res.status(404).send({ success: false, message: "Pelicula no encontrada" });
            }
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async deleteMovie(req,res){
        try {
            const movieId = req.params
            const deleted = Movie.destroy({
                where:{
                    movieId:movieId
                }
            })
            if(deleted){
                res.status(200).send({success:true,message:"Pelicula borrada"})
            } else {
                res.status(404).send({ success: false, message: "Pelicula no encontrada" });
            }
        } catch (error) {
            res.status(400).send({success:false,message:error})
        }
    }

}

export default MovieController