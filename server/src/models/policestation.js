import mongoose from "mongoose";

const policestationSchema = new mongoose.Schema({
    location: {
        type:String, 
        required: true, 
        unique: true,
    },
    pincode: {
        type: Number, 
        required: true, 
    },
    name: {
        type: String, 
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
})

export const policeModel = mongoose.model("Police", policestationSchema);