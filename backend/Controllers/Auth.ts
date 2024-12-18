// src/controllers/Auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const signup = async (req:Request, res:Response) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        res.status(200).json({
            success: true,
            token,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

