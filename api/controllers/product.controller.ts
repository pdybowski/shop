import mongoose from "mongoose";

export interface ProductDocument extends mongoose.Document {
    name: string;
    description: string;
    price: number;
    
}