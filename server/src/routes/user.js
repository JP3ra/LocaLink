import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { firstname, lastname,  username, phonenumber, address, pincode, password, email, age, sex } = req.body;
    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            return res.json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            firstname, 
            lastname,  
            username, 
            phonenumber, 
            address, 
            pincode, 
            password: hashedPassword, 
            email, 
            age, 
            sex 
        });

        await newUser.save();

        res.json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "An error occurred during registration" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.json({ message: "User Doesn't Exist!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ message: "Username or password is not correct. Please try again." });
        }

        const token = jwt.sign({ id: user._id }, "secret");
        res.json({ token, userID: user._id });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "An error occurred during login" });
    }
});

export { router as userRouter };
