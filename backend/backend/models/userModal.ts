import mongoose, { Schema } from 'mongoose';



export interface IUser extends Document {
  email: string;          
  password: string;        
  name: string;           
  role: 'admin' | 'user';  
}
const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true,trim:true },
  password: { type: String, required: true,trim:true },
  name: { type: String, required: true,trim:true},
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);