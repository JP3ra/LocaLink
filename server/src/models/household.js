import mongoose from "mongoose";

const householdSchema = new mongoose.Schema({
    location: {
        type: String, 
        required: true, 
        unique: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    brand: {
        type: String, 
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    ownernum: {
        type: Number,
        required: true,
        unique: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    offering: {
        type: String,
        required: true,
    },

});

export const householdModel = mongoose.model("Household", householdSchema);