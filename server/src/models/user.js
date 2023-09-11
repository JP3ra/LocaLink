import mongoose from 'mongoose';

const Userschema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: true,
    },

    lastname:{
        type: String, 
        required: true,
    },
    
    username: {
        type: String,
        required: true,
        unique: true
    },

    phonenumber:{
        type: Number, 
        required: true
    },
    
    address: {
        type: String,
        required: true,
    },

    pincode: {
        type: Number,
        required: true,
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    
    sex: {
        type: String,
        required: true,
    },
});
export const UserModel = mongoose.model("Users", Userschema);


