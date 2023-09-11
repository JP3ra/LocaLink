import express from "express";
import { hospitalModel } from "../models/hospitals.js";

const router = express.Router();

router.post("/hospital", async(req, res)=>{
    const {hospitalname, location, pincode, contact, department, ownernum} = req.body;
    try{
        const hospital = await hospitalModel.findOne({ownernum});
        if(hospital){
            return res.json("Hospital already exists");
        }
        const newHospital = new hospitalModel({
            hospitalname, 
            location, 
            pincode, 
            contact, 
            department,
            ownernum
        });

        await newHospital.save();
        res.json("Hospital registered successfully");
    }catch(err){
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

router.get("/hospitalget", async(req, res)=>{
    try{
        const data = await hospitalModel.find();
        return res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
});

export {router as hospitalRouter};