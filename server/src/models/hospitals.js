import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    hospitalname:{
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
    department: {
        type: String, 
        required: true, 
    },
    ownernum: {
        type:Number, 
        required: true,
        unique: true,
    },
});

export const hospitalModel = mongoose.model("hospital", hospitalSchema);