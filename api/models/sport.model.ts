import mongoose from "mongoose";
import { SPORT_TYPES } from "../constants/constants";

export interface ISportInput {
    name: String,
    isEnabled?: boolean
}

export interface ISportDocument extends ISportInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
}

const sportSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: SPORT_TYPES,
        required: true,
    },
    isEnabled: {
        type: Boolean,
        default: true,
    }    
}, { timestamps: true })

const SportModel = mongoose.model<ISportDocument>("Sport", sportSchema)
export default SportModel;