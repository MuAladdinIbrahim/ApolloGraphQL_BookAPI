import mongoose, { Schema, Document } from "mongoose";
import { IBookDocument } from "../../datasources/Books";

const BookSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number },
});

export default mongoose.model<IBookDocument>("Book", BookSchema);
