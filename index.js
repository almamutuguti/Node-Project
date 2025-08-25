import express from "express";
const app = express();
const PORT = 3000;

// having api in json
app.use(express.json())

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 80000
    },

    {
        id: 2,
        name: "phone",
        price: 50000
    }

]

app.get("/api/products", (req, res) => {
    res.json(products)
}) // created an end point to fetch the data

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`)
})