// import mongoose from "mongoose";


// const connectDB = async () => {
//   mongoose.connection.on("connected", () => console.log("Database Conneted"));
//   await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`);
// };
// export default connectDB;

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('MongoDB connected successfully');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err.message);
//         process.exit(1);
//     }
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;

