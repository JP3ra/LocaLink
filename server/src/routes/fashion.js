import express from "express";
import { fashionModel } from "../models/fashion.js";

const router = express.Router();

router.post("/fashion", async(req, res)=>{
    const {price, offering, location, pincode, contact, brand, ownernum, rating} = req.body;

    try{

        const fashion = await fashionModel.findOne({ownernum});
        if(fashion){
            return res.json("The fashion shop already exists");
        }

        const newFashion =  new fashionModel({
            price, 
            offering, 
            location, 
            pincode, 
            contact, 
            brand, 
            ownernum, 
            rating
        });

        await newFashion.save();
        res.json("Fashion registered successfully");
        
    }catch(err){
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

router.get("/fashget", async(req, res)=>{
    try{
        const data = await fashionModel.find();
        return res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
    
});

export {router as fashionRouter};