import Product from "../models/productModel.js";

//get all products

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

//create product

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product removed:", product})

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    
}

