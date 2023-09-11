import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
    ownernum: {
        type: Number,
        required: true,
        unique: true,
    },
    ownername: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    commodities: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

export const OwnerModel = mongoose.model("Owner", OwnerSchema);