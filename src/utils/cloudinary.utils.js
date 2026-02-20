import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs"
    
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        // uploading files
        const response = await cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File is uploaded on Cloudinary successfully",response.url);
                return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath) // it willl remove the locally saved temprorary file as the uspload opt got failed
        return null;
    }
}

export {uploadOnCloudinary}