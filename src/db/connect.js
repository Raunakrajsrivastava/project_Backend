
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const raw = process.env.MONGODB_URI || "";
        let uri;
        if (!raw) throw new Error('MONGODB_URI not set');
        // If user already included DB name in the URI, use it as-is.
        // Otherwise insert the DB_NAME before any query string.
        if (raw.includes(`/${DB_NAME}`)) {
            uri = raw;
        } else if (raw.includes('?')) {
            uri = raw.replace(/\?(.*)$/, `/${DB_NAME}?$1`);
        } else {
            uri = `${raw}/${DB_NAME}`;
        }

        //console.log('Connecting to MongoDB with URI:', uri.replace(/(:[^@]+)@/, ':*****@'));

        const connectionInstance = await mongoose.connect(uri);
         console.log(`\n MongoDB connected : ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("DB CONNECTION ERROR", error);
        process.exit(1)
    }
}

export default connectDB