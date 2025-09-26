import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 25},
    email: {type: String, required: true, unique: true, minlength: 6, maxlength: 40,  match:/.+\@.+\..+/},
    password: {type: String, required: true, minlength: 4},
    rol: {type: String, required: true, minlength: 3},
    createdAt: {type: Date, required: true, }

});

export const UserModel = mongoose.model("User", UserModel);