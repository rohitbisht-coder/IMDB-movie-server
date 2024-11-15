import { customErrorHandler } from "../../middlewares/errorHandler.js";
import moviesRepository from "./movies.repository.js";

export default class moviesController {
    constructor(){
        this.moviesController = new moviesRepository()
    }

    getAllMovie=async(req,res,next)=>{;
        const page = req.query.page || 1
        const resp = await this.moviesController.getMovies(page);
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    getTopRatedMovies=async(req,res,next)=>{;
        const page = req.query.page || 1
        const resp = await this.moviesController.getTopRated(page);
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    getUpcomingMovies=async(req,res,next)=>{;
        const page = req.query.page || 1
        const resp = await this.moviesController.getUpcoming(page);
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    getTrendingMovies=async(req,res,next)=>{;
        const page = req.query.page || 1
        const resp = await this.moviesController.getTrending(page);
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }

    getPopularMovies=async(req,res,next)=>{;
        const resp = await this.moviesController.getPopular();
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }
    getSingleMovies=async(req,res,next)=>{
        const id = req.params.id
        const resp = await this.moviesController.getSingleMovie(id);
        if (resp.success) {
            res.status(200).json({
                success: true,
                data: resp.data,
            });
        } else {
            next(new customErrorHandler(resp.error.statusCode, resp.error.msg));
        }
    }
 
    
}

export const moviesLogout = (req, res, next) => {
    res.clearCookie("jwtToken").json({ success: true, msg: "logout successful" });
};
