// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/user";
import connectDB from "./config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Connect to DB
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

