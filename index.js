import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"


const app = express();

app.use(express.json())

connectDB();

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`) 
})
