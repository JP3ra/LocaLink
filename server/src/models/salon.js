import mongoose from "mongoose";

const salonSchema = new mongoose.Schema({
    sex: {
        type: String, 
        required: true,
    },
    location: {
        type: String, 
        required: true,
    },
    pincode: {
        type: Number, 
        required: true,
    },
    pricerange: {
        type: Number,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    ownernum:{
        type: Number,
        required: true,
        unique: true,
    },
    rating:{
        type: Number,
        required: true,
    },
})

export const salonModel = mongoose.model("salon", salonSchema);