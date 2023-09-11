import mongoose from "mongoose";

const fashionSchema = new mongoose.Schema({
    price:{
        type: Number,
        required: true,
    },
    offering: {
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
    contact: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    ownernum:{
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
})

export const fashionModel = mongoose.model("Fashion", fashionSchema);