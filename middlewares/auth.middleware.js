import parseError from "../utils/parseError.js";
import User from "../models/user.model.js";
import { decrypt } from "../services/crypto.js";
import TokenBucketsStore from "../utils/tokenBucket.js";
import Cache from "../utils/cache.js";

const tokenBucket = new TokenBucketsStore();
export const usersCache = new Cache();

const authMiddleware = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization?.replace("Bearer ", "");
        if (!authToken)
            return res.status(401).json({ success: false, message: "You are not authorized to use this service." });

        const { id, type, token } = decrypt(token);
        const acceptRequest = tokenBucket.acceptRequest(_id);

        if (acceptRequest === false)
            return res
                .status(429)
                .json({ success: false, message: "You've reached your rate limit. Try again later." });
        if (acceptRequest === null) tokenBucket.put(id, type === "TEST" ? 100 : 10_000);

        const user =
            usersCache.get(_id) || type === "TEST"
                ? await User.findOne({
                      "authTokens.test.token": token
                  })
                : await User.findOne({ "authTokens.production.token": token });

        if (!user) return res.status(404).json({ success: false, message: "User not found." });
        if (type === "TEST" && !user.authTokens.test.active)
            return res.status(401).json({
                success: false,
                message: "This API key is inactive and cannot be used. Go to your dashboard to activate it."
            });
        if (type === "PRODUCTION" && !user.authTokens.production.active)
            return res.status(401).json({
                success: false,
                message: "This API key is inactive and cannot be used. Go to your dashboard to activate it."
            });

        delete user.password;
        usersCache[user._id] = user.toObject();
        req.authUser = user;
        next();
    } catch (error) {
        parseError(error, res);
    }
};

export default authMiddleware;
