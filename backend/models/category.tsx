

import mongoose, { Schema, Document, Model } from "mongoose";


export interface ICategory extends Document {
  name: string;
  description?: string;
  courses: mongoose.Schema.Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

// Export the Category model with proper typing
const Category: Model<ICategory> = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
