import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantname: {
        type: String, 
        required: true,
    },
    cuisine: {
        type: String, 
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    pincode: {
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
    contact: {
        type: Number,
        required: true,
    },
});

export const restaurantModel = mongoose.model("Restaurant", restaurantSchema);