// src/config/db.ts
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!, {
    useUnifiedTopology: true, // Recommended in Mongoose 6.x and newer
    useCreateIndex: true,      // Optional
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;

