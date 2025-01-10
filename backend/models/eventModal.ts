import mongoose, { Schema } from 'mongoose';

export interface IEvent extends Document {
  eventName: string;
  description: string;
  date: Date;
  domain: string;
  location: Location; 
  capacity: number;
  image?: string; 
  registeredUsers: mongoose.Types.ObjectId[]; 
}
const eventSchema = new Schema<IEvent>({
  eventName: { type: String, required: true, trim:true },
  description: { type: String, required: true, trim:true },
  date: { type: Date, required: true,trim:true },
  domain:{type:String ,required:true},
  location: { type: String, required: true },
  capacity: { type: Number, required: true, trim:true },
  image:{type:String, default:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'},
  registeredUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
 
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);