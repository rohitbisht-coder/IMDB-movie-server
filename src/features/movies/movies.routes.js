import express from "express"
import moviesController from "./movies.controller.js"

export const movieRoutes = express.Router()
const MovieController = new moviesController()

movieRoutes.route("/getAllMovies").get(MovieController.getAllMovie)
movieRoutes.route("/getTopRatedMovies").get(MovieController.getTopRatedMovies)
movieRoutes.route("/getTrendingdMovies").get(MovieController.getTrendingMovies)
movieRoutes.route("/getUpcomingMovies").get(MovieController.getUpcomingMovies)
movieRoutes.route("/getPopularMovies").get(MovieController.getPopularMovies)
movieRoutes.route("/getSingleMovies/:id").get(MovieController.getSingleMovies)