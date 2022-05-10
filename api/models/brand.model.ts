import mongoose from "mongoose";
import { BRANDS } from "../constants/constants";

export interface IBrandInput {
  name: String;
  isEnabled?: boolean;
}

export interface IBrandDocument extends IBrandInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: BRANDS,
      required: true,
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
    logo: {
      type: String,
    },
  },
  { timestamps: true }
);

const BrandModel = mongoose.model<IBrandDocument>("Brand", brandSchema);
export default BrandModel;
