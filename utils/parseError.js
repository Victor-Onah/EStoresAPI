const parseError = (error, res) => {
    console.log(error);
    if (error.name === "ValidationError") {
        return res.status(400).json({ success: false, message: error.message });
    } else if (error.code === 11000) {
        return res.status(409).json({ success: false, message: "Duplicate key error." });
        // } else if (error.name === "CastError") {
        // return res.status(400).json({ success: false, message: "Invalid ID format." });
    } else if (error.name === "UnauthorizedError") {
        return res.status(401).json({ success: false, message: "Unauthorized access." });
    } else if (error.name === "ForbiddenError") {
        return res.status(403).json({ success: false, message: "Forbidden access." });
    } else {
        return res.status(500).json({ success: false, message: "An error occurred on the server." });
    }
};

export default parseError;
