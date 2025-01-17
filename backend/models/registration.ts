import mongoose, { Schema } from 'mongoose';


export interface IRegistration extends Document {
  userId: mongoose.Types.ObjectId;
  eventId: mongoose.Types.ObjectId; 
  registrationDate: Date;           
  status: 'confirmed' | 'waitlist' | 'cancelled'; 
}

const registrationSchema = new Schema<IRegistration>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  registrationDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['confirmed', 'waitlist', 'cancelled'], default: 'confirmed' }
}, { timestamps: true });

export default mongoose.model('Registration', registrationSchema);