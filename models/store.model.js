import mongoose, { connection } from "../config/database.config.js";

const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "No name was provided for store creation."],
            trim: true,
            validate: {
                validator(value) {
                    return /^[\w'’\-]+[\w'’\-\s]*$/.test(value);
                },
                message: "The store name provided is invalid!"
            }
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            res: "User",
            required: [true, "The ID of the store owner was not specified."]
        },
        description: {
            type: String,
            trim: true
        },
        admins: {
            type: [
                {
                    _id: {
                        type: mongoose.Schema.Types.ObjectId,
                        res: "User",
                        required: [true, "The ID of the store owner was not specified."]
                    },
                    permissions: {
                        type: String,
                        enum: ["readonly", "readwrite"]
                    }
                }
            ],
            _id: false
        }
    },
    { timestamps: true }
);

const Store = connection.model("Store", storeSchema);

export default Store;
