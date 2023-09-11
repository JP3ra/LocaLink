import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OwnerModel } from "../models/owner.js";

const router = express.Router();

router.post("/regVendor", async (req, res) => {
    const { ownernum, ownername, companyname, commodities, phonenumber, email, address, pincode } = req.body;

    try {
        const existingOwner = await OwnerModel.findOne({ $or: [{ ownernum }, { companyname }] });

        if (existingOwner) {
            if (existingOwner.ownernum === ownernum) {
                return res.status(400).json({ message: "ownernum already exists!" });
            }

            if (existingOwner.companyname === companyname) {
                return res.status(400).json({ message: "Company name already exists!" });
            }
        }

        const newOwner = new OwnerModel({
            ownernum, 
            ownername, 
            companyname, 
            commodities, 
            phonenumber, 
            email, 
            address, 
            pincode
        });

        await newOwner.save();

        res.json({ message: "Owner registered successfully!" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});


export {router as ownerRouter};


// export { router as ownerRouter };

// import express from "express";
// import { OwnerModel } from "../models/owner.js";


// const router = express.Router();

// router.post("/regVendor", async(req, res)=>{
//     const {ownernum, ownername, companyname, commodities, phonenumber, email, address,  pincode} = req.body;

//     try{
//         const owner = await OwnerModel.findOne({ ownernum });

//         if(owner){
//             console.log("User already exists");
//         }
        

//         const newOwner = new OwnerModel({
//             ownernum, 
//             ownername, 
//             companyname, 
//             commodities, 
//             phonenumber,
//             email, 
//             address, 
//             pincode,
//         });
        
//         await newOwner.save();
        
//         console.log("Company registered successfully");


//     }catch(err){
//         console.error("Error during registration:", err);
//         res.status(500).json({ message: "An error occurred during registration" });
//     }
// });

// export {router as ownerRouter};