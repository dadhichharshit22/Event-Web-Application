// src/models/User.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
});

export default mongoose.model<IUser>("User", userSchema);


