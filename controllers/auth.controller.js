import User from "../models/user.model.js";
import { encrypt, hash } from "../services/crypto.js";
import parseError from "../utils/parseError.js";

// Register new user
export const register = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                status: "Failed",
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        await User.create({
            ...req.body,
            authTokens: {
                production: { token: hash({ type: "PRODUCTION", email: req.body?.email }) },
                test: { token: hash({ type: "TEST", email: req.body?.email }) }
            }
        });
        res.status(201).json({ status: "Successful", message: "User account creation was successful." });
    } catch (error) {
        parseError(error, res);
    }
};

// Login user
export const login = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                status: "Failed",
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        const user = await User.findOne({ email: req.body?.email });
        if (!user) return res.status(404).json({ status: "Failed", reason: "User not found." });
        if (!user.comparePassword(req.body?.password))
            return res.status(401).json({ status: "Failed", reason: "Invalid email or password." });

        const authToken = encrypt({ _id: user._id, expires: Date.now() + 86400000 }); // 24 hours
        res.status(200).json({ status: "Successful", data: authToken });
    } catch (error) {
        parseError(error, res);
    }
};
