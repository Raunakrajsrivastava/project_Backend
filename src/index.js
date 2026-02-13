
// const dotenv = require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/connect.js";
//import { DB_NAME } from './constants.js'; 

dotenv.config();
const app = express(); 

connectDB()
  .then(() => {
    app.on("error",(error) => {
        console.log("ERRR : ",error);
        process.exit(1);
    })
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`);
  })  
})
.catch((err) =>{
    console.log("mongo db connection failed : ",err);
    
})

 
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