
import mongoose from "mongoose";


export interface IPantsDocument extends mongoose.Document {
    size: String,

}

const pantsSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    }
})


const PantsModel = mongoose.model<IPantsDocument>("Pants", pantsSchema)
export default PantsModel;