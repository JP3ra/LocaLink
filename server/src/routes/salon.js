import express from "express";
import { salonModel } from "../models/salon.js";

const router = express.Router();

router.post("/salon", async (req, res) => {
    const { sex, location, pincode, pricerange, companyname, contact, ownernum, rating } = req.body;

    try {
        const salon = await salonModel.findOne({ ownernum });

        if (salon) {
            return res.json("Salon already exists");
        }

        const newSalon = new salonModel({
            sex,
            location,
            pincode,
            pricerange,
            companyname,
            contact,
            ownernum,
            rating
        });

        await newSalon.save();
        res.json("Salon resgistered successfully");
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

router.put("/salonupdate", async (req, res) => {
    const newLocation = req.body.newLocation;
    const id = req.body.id; 

    try {
        const updatedSalon = await salonModel.findByIdAndUpdate(
            id,
            { location: newLocation },
            { new: true }
        );

        if (!updatedSalon) {
            return res.status(404).json({ message: "Salon not found" });
        }

        res.json({ message: "Salon location updated successfully", data: updatedSalon });
    } catch (error) {
        console.error("Error updating salon location:", error);
        res.status(500).json({ message: "An error occurred while updating the location" });
    }
});
router.delete('/deletesalon/:id', async(req, res)=>{  
    const id = req.params.id;
    await salonModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

router.get("/salonget", async (req, res) => {
    try {
        const data = await salonModel.find();
        return res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
})

export { router as salonRouter }