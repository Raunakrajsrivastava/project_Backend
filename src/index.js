
// const dotenv = require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/connect.js";
//import { DB_NAME } from './constants.js'; 
// 

 connectDB();

 
// // can be done in this way
// // // but we used import export method to make it look more proffestional
// import express from "express"
// import mongoose from "mongoose";
// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",() => {
//             console.log("ERRRR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,() => {
//             console.log(`app is listening on port ${process.env.PORT}`);
            
//         })
//     }
//     catch(error){
//         console.log("ERROR : ",error);
        
//     }
// })()