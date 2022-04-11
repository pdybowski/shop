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
// import { BRANDS,  PRODUCT_CATEGORIES, SHIRT_SIZE, PANTS_SIZE, SHOE_SIZE, SPORT_TYPES } from "../constants/constants";
import { BRANDS,  PRODUCT_CATEGORIES, PRODUCT_TYPES, SPORT_TYPES } from "../constants/constants";


export interface IProductInput {

    name: String,
    description?: String,
    price: Number,
    sportType: String,
    img?: Buffer,
    // size: String,
    brand: String,
    isCarousel?: Boolean,
    isBestseller?: Boolean,
    rating?: Number

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
        data: Buffer,
        contentType: String,
    },
    brand: {
        type: String,
        enum: BRANDS,
        required: true,
    },
    // size: {
    //     type: String,
    //     enum: [SHIRT_SIZE, ]
        
    // }
    
},
{
    timestamps: true
}
)


const ProductModel = mongoose.model<IProductDocument>("Product", productSchema)
export default ProductModel;