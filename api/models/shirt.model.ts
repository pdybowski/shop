
import mongoose from "mongoose";


export interface IShirtDocument extends mongoose.Document {
    size: String,

}

const shirtSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    }
})


const ShirtModel = mongoose.model<IShirtDocument>("Shirt", shirtSchema)
export default ShirtModel;