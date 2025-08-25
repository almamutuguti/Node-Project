import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

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

mongoose.connect()

app.get("/api/products", (req, res) => {
    res.json(products)
}) // created an end point to fetch the data

app.post("/api/products", (req, res) => {
    const { name, price } = req.body
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`)
})
