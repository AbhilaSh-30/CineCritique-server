import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
}

export default connectDB;