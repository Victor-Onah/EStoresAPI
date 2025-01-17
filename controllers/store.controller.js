import Product from "../models/product.model.js";
import Store from "../models/store.model.js";
import parseError from "../utils/parseError.js";

export const getAllStores = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: await Store.find({ owner: req.authUser._id }).select(req.query.fields?.split(",").join(" "))
        });
    } catch (error) {
        parseError(error, res);
    }
};

export const getStoreById = async (req, res) => {
    try {
        const store = await Store.findOne({ _id: req.params.id, owner: req.authUser._id }).select(
            req.query.fields?.split(",").join(" ")
        );

        if (!store) return res.status(404).json({ success: false, message: "Store not found." });
        res.status(200).json({ success: true, data: store });
    } catch (error) {
        parseError(error, res);
    }
};

export const createStore = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                success: false,
                message: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const newStore = await Store.create({ ...req.body, owner: req.authUser._id });
        req.authUser.stores.push(newStore._id);
        await req.authUser.save();
        res.status(201).json({ success: true, data: newStore.toObject() });
    } catch (error) {
        parseError(error, res);
    }
};

export const updateStore = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                success: false,
                message: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const updatedStore = await Store.findOneAndUpdate(
            { _id: req.params.id, owner: req.authUser._id },
            req.body.updates,
            {
                new: true,
                runValidators: true
            }
        );
        res.status(201).json({ success: true, data: updatedStore.toObject() });
    } catch (error) {
        parseError(error, res);
    }
};

export const deleteStore = async (req, res) => {
    try {
        if (!req.authUser.stores.includes(req.params.id))
            return res
                .status(401)
                .json({ success: false, message: "You are not authorized to carry out this action." });

        await Product.deleteMany({ storeId: req.params.id });
        await Store.findOneAndDelete({ _id: req.params.id, owner: req.authUser._id });
        res.status(204).json({
            success: true,
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
