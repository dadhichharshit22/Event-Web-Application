import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true,trim:true },
  password: { type: String, required: true,trim:true },
  name: { type: String, required: true,trim:true},
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);