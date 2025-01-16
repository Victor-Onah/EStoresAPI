import parseError from "../utils/parseError.js";
import User from "../models/user.model.js";
import { decrypt } from "../services/crypto.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const { _id, expires } = decrypt(token);
        if (expires < Date.now()) return res.status(401).json({ status: "Failed", reason: "Token has expired." });

        const user = await User.findById(_id);
        if (!user) return res.status(404).json({ status: "Failed", reason: "User not found." });
        else (req.authUser = user), next();
    } catch (error) {
        parseError(error, res);
    }
};

export default authMiddleware;
