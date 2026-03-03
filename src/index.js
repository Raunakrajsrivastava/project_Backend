import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR:", error);
      process.exit(1);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });
// // const dotenv = require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import fs from "fs";
// import path from "path";
//import express from "express";
// import connectDB from "./db/connect.js";
// //import { DB_NAME } from './constants.js'; 
// import { app } from "./app.js";
// dotenv.config();
// // // Ensure .env is loaded even if a runner preloaded dotenv with no vars
// // if (!process.env.MONGODB_URI) {
// //   const envPath = path.resolve(process.cwd(), ".env");
// //     if (fs.existsSync(envPath)) {
// //     try {
// //       const rawContent = fs.readFileSync(envPath);
// //       try {
// //         console.log('.env raw length:', rawContent.length);
// //         console.log('.env head (utf8):', rawContent.toString('utf8', 0, 200));
// //       } catch (e) {
// //         console.log('Could not print raw as utf8:', e.message);
// //       }
// //       console.log('.env first bytes (hex):', rawContent.slice(0,4).toString('hex'));
// //       const parsed = dotenv.parse(rawContent);
// //       console.log('Parsed .env keys:', Object.keys(parsed));
// //       if (parsed.MONGODB_URI) {
// //         const masked = parsed.MONGODB_URI.replace(/:(?:[^@]+)@/, ':*****@');
// //         console.log('Parsed MONGODB_URI (masked):', masked);
// //       }
// //       Object.assign(process.env, parsed);
// //       console.log('Loaded .env from', envPath);
// //     } catch (e) {
// //       console.log('Failed to parse .env:', e.message);
// //     }
// //   } else {
// //     console.log('.env not found at', envPath);
// //   }
// // }

// const app = express();
// //console.log(process.env.MONGODB_URI ? 'MONGODB_URI set' : 'MONGODB_URI NOT set');

// connectDB()
//   .then(() => {
//     app.on("error",(error) => {
//         console.log("ERRR : ",error);
//         process.exit(1);
//     })
//   app.listen(process.env.PORT || 8000, () => {
//     console.log(`server is running at port : ${process.env.PORT}`);
//   })  
// })
// .catch((err) =>{
//     console.log("mongo db connection failed : ",err);
    
// })

 
// // // can be done in this way
// // // // but we used import export method to make it look more proffestional
// // import express from "express"
// // import mongoose from "mongoose";
// // ;( async () => {
// //     try{
// //         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// //         app.on("error",() => {
// //             console.log("ERRRR: ",error);
// //             throw error;
// //         })
// //         app.listen(process.env.PORT,() => {
// //             console.log(`app is listening on port ${process.env.PORT}`);
            
// //         })
// //     }
// //     catch(error){
// //         console.log("ERROR : ",error);
        
// //     }
// // })()