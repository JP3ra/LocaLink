import express from "express";
import { restaurantModel } from "../models/restaurant.js";
const router = express.Router();

router.post("/restaurant", async(req, res)=>{
    const {restaurantname, cuisine, location, price, pincode, streetnumber, ownernum, rating, contact} = req.body;

    try{

        const restaurant = await restaurantModel.findOne({ ownernum });
    
        if(restaurant){
            return res.json("The restaurant already exists");
        }
        
        const newRestaurant = new restaurantModel({
            restaurantname, 
            cuisine, 
            location, 
            price, 
            pincode,  
            ownernum, 
            rating, 
            contact
        });
    
        await newRestaurant.save();
        res.json("Restaurant registered successfully");
    }catch(err){
        console.error("Error during registration:", err);
        res.status(500).json({ message: "An error occurred during registration" });
    }

});


router.put("/restupdate", async (req, res) => {
    const newLocation = req.body.newLocation;
    const id = req.body.id;
  
    try {
      const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
        id,
        { location: newLocation },
        { new: true } 
      );
  
      if (!updatedRestaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
  
      res.json({ message: "Restaurant location updated successfully", data: updatedRestaurant });
    } catch (error) {
      console.error("Error updating restaurant location:", error);
      res.status(500).json({ message: "An error occurred while updating the location" });
    }
  });
  
router.delete('/deleteres/:id', async(req, res)=>{  
    const id = req.params.id;
    await restaurantModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

router.get("/restget", async (req, res) => {
    try {
        const data = await restaurantModel.find();
        return res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while fetching restaurant data" });
    }
});

export {router as restaurantRouter};
