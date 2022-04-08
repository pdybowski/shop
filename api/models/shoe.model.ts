
import mongoose from "mongoose";


export interface IShoeDocument extends mongoose.Document {
    size: String,

}

const shoeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    }
})


const ShoeModel = mongoose.model<IShoeDocument>("Shoe", shoeSchema)
export default ShoeModel;