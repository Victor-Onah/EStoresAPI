import Product from "../models/Product.js";
import Store from "../models/Store.js";
import parseError from "../utils/parseError.js";

// Get all stores
export const getAllStores = async (req, res) => {
    try {
        res.status(200).json({
            status: "Successful",
            data: await Store.find({ owner: req.authUser._id }).select(req.query.fields?.split(",").join(" "))
        });
    } catch (error) {
        parseError(error, res);
    }
};

// Get store by ID
export const getStoreById = async (req, res) => {
    try {
        const store = await Store.findOne({ _id: req.params.id, owner: req.authUser._id }).select(
            req.query.fields?.split(",").join(" ")
        );

        if (!store) return res.status(404).json({ status: "Failed", reason: "Store not found." });
        res.status(200).json({ status: "Successful", data: store });
    } catch (error) {
        parseError(error, res);
    }
};

// Create a new store
export const createStore = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                status: "Failed",
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const newStore = await Store.create({ ...req.body, owner: req.authUser._id });
        req.authUser.stores.push(newStore._id);
        await req.authUser.save();
        res.status(201).json({ status: "Successful", data: newStore.toObject() });
    } catch (error) {
        parseError(error, res);
    }
};

// Update a store's information
export const updateStore = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                status: "Failed",
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const updatedStore = await Store.findOneAndUpdate(
            { _id: req.params.id, owner: req.authUser._id },
            req.body.updates,
            {
                new: true,
                runValidators: true
            }
        );
        res.status(201).json({ status: "Successful", data: updatedStore.toObject() });
    } catch (error) {
        parseError(error, res);
    }
};

// Delete a store and all associated products
export const deleteStore = async (req, res) => {
    try {
        if (!req.authUser.stores.includes(req.params.id))
            return res
                .status(401)
                .json({ status: "Failed", reason: "You are not authorized to carry out this action." });

        await Product.deleteMany({ storeId: req.params.id });
        await Store.findOneAndDelete({ _id: req.params.id, owner: req.authUser._id });
        res.status(204).json({
            status: "Successful",
            message: "Store and all its products have been deleted successfully."
        });
    } catch (error) {
        parseError(error, res);
    }
};

// Initialize a store ownership transfer
export const initTransferOfStoreOwnership = (req, res) => {
    try {
        // TODO: Write logic to notify new owner of transfer and approval.
    } catch (error) {
        parseError(error, res);
    }
};
