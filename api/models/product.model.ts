/* TODO 

data:
isBestseller
name 
description
price
sport: enum (tennis)
type: enum (shoe)
category: enum (man, woman, children)
image
size
brand
isCarousel (temporary)


*/
import mongoose from "mongoose";
import { BRANDS,  PRODUCT_CATEGORIES, PRODUCT_TYPES, SPORT_TYPES } from "../constants/constants";


export interface IProductInput {
    name: String,
    price: Number,
    sportType: String,
    size: String,
    brand: String,
    productCategory: String,
    img?: String,
    description?: String,
    isCarousel?: Boolean,
    isBestseller?: Boolean,
    rating?: Number,
    sellCount?: Number,
}

export interface IProductDocument extends IProductInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
}

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    sportType: {
        type: String,
        enum: SPORT_TYPES,
        required: true
    },
    productCategory: {
        type: String,
        enum: PRODUCT_CATEGORIES,
        required: true,
    },
    productType: {
        type: String, 
        enum: PRODUCT_TYPES,
        required: true,
    },
    img: {
        type: String,
    },
    brand: {
        type: String,
        enum: BRANDS,
        required: true,
    },
    sellCount: {
        type: Number,
        default: 0,
    },
    size: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
)


const ProductModel = mongoose.model<IProductDocument>("Product", productSchema)
export default ProductModel;