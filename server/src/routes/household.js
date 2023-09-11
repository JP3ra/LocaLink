import express from "express";
import { householdModel } from "../models/household.js";
import { hospitalModel } from "../models/hospitals.js";

const router = express.Router();

router.post("/household", async(req, res)=>{
    const {location, pincode, brand, contact, ownernum, rating, offering} = req.body;

    try{
        const household = await householdModel.findOne({ownernum});
        if(household){
            return res.json("The household shop already exists");
        }

        const newHousehold = new householdModel({
            location, 
            pincode, 
            brand, 
            contact, 
            ownernum, 
            rating, 
            offering
        });

        await newHousehold.save();
        res.json("House hold shop registered successfully");

    }catch(err){
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});


router.put("/hospupdate", async (req, res) => {
    const newLocation = req.body.newLocation;
    const id = req.body.id; 

    try {
        const updatedHospital = await hospitalModel.findByIdAndUpdate(
            id,
            { location: newLocation },
            { new: true }
        );

        if (!updatedHospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        res.json({ message: "Hospital location updated successfully", data: updatedHospital });

    } catch (error) {
        console.error("Error updating Hospital location:", error);
        res.status(500).json({ message: "An error occurred while updating the location" });
    }
    res.send("updated")
});
router.delete('/deletehosp/:id', async(req, res)=>{  
    const id = req.params.id;
    await hospitalModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});



router.get("/houseget", async(req, res)=>{
    try{
        const data = await householdModel.find();
        return res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
    
});

export {router as householdRouter};