import express from "express";
import { policeModel } from "../models/policestation.js";

const router = express.Router();

router.post("/police", async(req, res)=>{
    const {location, pincode, name, contact} = req.body;

    try{
        const police = await policeModel.findOne({pincode});
        if(police){
            return res.json("Police stattion already exists");
        }

        const newPolice = new policeModel({
            location, 
            pincode, 
            name, 
            contact
        });

        await newPolice.save();
        res.json("Police stattion registered successfully");
    }catch(err){
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

router.get("/policeget", async(req, res)=>{
    try{
        const data = await policeModel.find();
        return res.json(data);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
});

export {router as policeRouter};