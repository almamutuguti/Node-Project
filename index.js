import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv"

dotevn.config();

const app = express();


// having api in json
app.use(express.json())

// let products = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 80000
//     },

//     {
//         id: 2,
//         name: "phone",
//         price: 50000
//     }

// ]

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully."))
    .catch((err) => console.error("MongoDB connection error:", err))

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: false},
})

const Product = mongoose.model("Product", productSchema)

// app.get("/api/products", (req, res) => {
//     res.json(products)
// }) // created an end point to fetch the data
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products)
}) 

// app.post("/api/products", (req, res) => {
//     const { name, price } = req.body
//     const newProduct = {
//         id: products.length + 1,
//         name,
//         price
//     };
//     products.push(newProduct);
//     res.status(201).json(newProduct);
// });
app.post("/api/products", async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`)
})
