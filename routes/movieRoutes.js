import { Router } from "express";
import MovieController from "../Controllers/MovieController.js";

const movieRoutes = Router()
const movieController = new MovieController()

movieRoutes.post("/",movieController.createMovie)

movieRoutes.get("/:movieId",movieController.getMovieId)

movieRoutes.put("/:movieId",movieController.updateMovie)

movieRoutes.delete("/:movieId",movieController.deleteMovie)

export default movieRoutes