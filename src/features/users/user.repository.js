import mongoose, { Mongoose } from "mongoose";
import { favSchma, userSchma } from "./user.schma.js";
import { comparePassword } from "../../utilis/hashPassword.js";

export const userModel = mongoose.model("user", userSchma);
const favMovieModel = mongoose.model("favMovie", favSchma);


export default class userRepository {
    async createUser(userData) {
        try {
            const newUser = new userModel(userData);
            await newUser.save()
            return { success: true, res: newUser };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async loginUser(userData) {
        const { email, password } = userData
        try {
            const findUser = await userModel.findOne({ email });
            if (!findUser) {
                return { success: false, error: { statusCode: 404, msg: "User not found" } };
            } else {
                const passwordValidation = await comparePassword(password, findUser.password);
                if (passwordValidation) {
                    return { success: true, res: findUser };
                } else {
                    return { success: false, error: { statusCode: 404, msg: "Wrong Password" }, };
                }
            }
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async addMovieToFav(poster, name, userId,movieId) {
        try {
            const favMovie = new favMovieModel({ name, poster,movieId });
            await favMovie.save()
             await userModel.updateOne({ _id: userId }, { $push: { Favorite:favMovie._id }})
              const user = await userModel.findById(userId).populate("Favorite").exec()
            return { success: true, error: { statusCode: 201, msg: "Movie Added Succesfully" } , res:user.Favorite};
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async removeMovieFromFav( userId , movieId) {
        try {
            const findMovie = await favMovieModel.find({movieId});
            await userModel.updateOne({ _id: userId }, { $pull:{Favorite:findMovie[0]._id} })
            await favMovieModel.findByIdAndDelete(findMovie[0]._id)
            const user = await userModel.findById(userId).populate("Favorite").exec()
            return { success: true, error: { statusCode: 200, msg: "Movie Removed Succesfully" }, res:user.Favorite};
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
    async getFavMovie(userId) {
        try {
            const user = await userModel.findById(userId).populate("Favorite").exec()
            return { success: true, error: { statusCode: 200 } ,res: user.Favorite };

        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
}
