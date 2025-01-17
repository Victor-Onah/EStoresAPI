import Product from "../models/product.model.js";
import parseError from "../utils/parseError.js";

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const { page, limit, fields, storeId } = req.query;

        if (!req.authUser.stores.includes(storeId))
            return res.status(403).json({ success: false, reason: "You do not have access to this store." });

        const products =
            parseInt(page) && parseInt(limit)
                ? await Product.find({ storeId })
                      .skip(limit * (page - 1))
                      .limit(limit)
                      .select(fields?.split(",").join(" "))
                : await Product.find().select(fields?.split(",").join(" "));

        res.status(200).json({ success: true, data: products });
    } catch (error) {
        parseError(error, res);
    }
};

// Get a single product
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const { fields, storeId } = req.query;
        const product = await Product.findOne({ _id: id, storeId }).select(fields?.split(",").join(" "));

        if (!product) {
            return res.status(404).json({
                success: false,
                reason: "Product not found."
            });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        parseError(error, res);
    }
};

// Create a new product
export const createProduct = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                success: false,
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const { storeId } = req.body;
        if (!req.authUser.stores.includes(storeId))
            return res.status(403).json({ success: false, reason: "You do not have access to this store." });

        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        parseError(error, res);
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                success: false,
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const { storeId } = req.query;
        if (!req.authUser.stores.includes(storeId))
            return res.status(403).json({ success: false, reason: "You do not have access to this store." });

        const product = await Product.findOneAndUpdate({ _id: req.params.id, storedId }, req.body.update, {
            new: true,
            runValidators: true
        });

        if (!product) res.status(404).json({ success: false, message: "Product not found" });
        else res.status(200).json({ success: true, data: product });
    } catch (error) {
        parseError(error, res);
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const { storeId } = req.query;
        if (!req.authUser.stores.includes(storeId))
            return res.status(403).json({ success: false, reason: "You do not have access to this store." });

        const product = await Product.findOneAndDelete({ _id: req.params.id, storeId });
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        else res.json({ success: true, data: null });
    } catch (error) {
        parseError(error, res);
    }
};
