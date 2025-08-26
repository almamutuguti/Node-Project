import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//Register the user

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" })
        
        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword})

        await user.save()

        res.status(201).json({ message: "User registered successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

