import User from "../models/user.model.js";
import { encrypt } from "../services/crypto.js";
import parseError from "../utils/parseError.js";

// Register new user
export const register = async (req, res) => {
    try {
        if (!req.is("application/json"))
            return res.status(400).json({
                success: false,
                reason: `Expected request body to be of type 'application/json', got type '${req.headers["content-type"]}' instead.`
            });

        await User.create({
            ...req.body,
            authTokens: {
                production: { token: encrypt({ type: "PRODUCTION", email: req.body?.email }) },
                test: { token: encrypt({ type: "TEST", email: req.body?.email }) }
            }
        });
        res.status(201).json({ success: true, message: "User account creation was successful." });
    } catch (error) {
        parseError(error, res);
    }
};
