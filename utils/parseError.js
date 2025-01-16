const parseError = (error, res) => {
    console.log(error);
    if (error.name === "ValidationError") {
        return res.status(400).json({ status: "Failed", reason: error.message });
    } else if (error.code === 11000) {
        return res.status(409).json({ status: "Failed", reason: "Duplicate key error." });
        // } else if (error.name === "CastError") {
        // return res.status(400).json({ status: "Failed", reason: "Invalid ID format." });
    } else if (error.name === "UnauthorizedError") {
        return res.status(401).json({ status: "Failed", reason: "Unauthorized access." });
    } else if (error.name === "ForbiddenError") {
        return res.status(403).json({ status: "Failed", reason: "Forbidden access." });
    } else {
        return res.status(500).json({ status: "Failed", reason: "An error occurred on the server." });
    }
};

export default parseError;
