import mongoose from "mongoose";

export const userSchma = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/],
  },
  Favorite:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:"favMovie"
  }],
  password: { type: String, required: [true, "password is required"] },
})

export const favSchma = new mongoose.Schema({
  name:{type:String , unique:true},
  poster:{type:String, unique:true},
  movieId:{type:Number}
})