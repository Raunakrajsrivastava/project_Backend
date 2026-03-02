import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "..utils/ApiError.js"
import {User} from "../models/user.model.js"
const registerUser = asyncHandler( async(req,res) => {
    //get user details from frontend
    //validation - not empty
    //check if user already exist from username or email
    //check for images and avatar
    //upload them to cloudinary, both avatarr and
    //create user object - create entry in db
    //remove password and refresh token
    //check for user creation
    //return response accordingly


   const {fullName, email, username, password}= req.body
   console.log("email : ",email);
   
    // if(fullName === ""){
    //     throw new ApiError(400,"fullname is required")
    // }
    if(
        [fullName,email,username,password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are required")
    }
    User.findOne({
        $or: [{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with name or email already exists")
    }
    req.files?.avatar
})

export { registerUser, }
