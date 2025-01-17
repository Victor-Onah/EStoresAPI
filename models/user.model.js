import mongoose, { connection } from "../configs/database.config.js";
import { hash } from "../services/crypto.js";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "No email was provided for registration."],
        trim: true,
        unique: true,
        validate: {
            validator(value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: "The email provided is invalid!"
        }
    },
    fullname: {
        type: String,
        required: [true, "No fullname was provided for registration."],
        trim: true
    },
    password: {
        type: String,
        required: [true, "No password was provided for registration."],
        trim: true
    },
    phoneNumber: {
        type: [String],
        required: [true, "No phone number was provided for registration"],
        validate: {
            validator(numbers) {
                return Array.isArray(numbers) && numbers.every((value) => /^(\+[1-9]|0)\d{6,14}$/.test(value));
            },
            message(props) {
                return `${
                    Array.isArray(props.value)
                        ? props.value.find((value) => !/^(\+[1-9]|0)\d{6,14}$/.test(value))
                        : props.value
                } is not a valid phone number.`;
            }
        }
    },
    githubProfileUrl: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "No GitHub URL was provided"],
        validate: {
            validator(value) {
                return /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38}[a-zA-Z0-9])?$/.test(value);
            },
            message: "The GitHub profile link provided is invalid!"
        }
    },
    apiKeys: {
        type: {
            test: {
                type: {
                    active: {
                        type: Boolean,
                        default: true
                    },
                    token: {
                        type: String,
                        default: [true, "No test auth token was provided."]
                    },
                    allowedDomains: {
                        type: [String],
                        default: []
                    }
                },
                required: true,
                _id: false
            },
            production: {
                type: {
                    active: {
                        type: Boolean,
                        default: false
                    },
                    token: {
                        type: String,
                        required: [true, "No production auth token was provided."]
                    },
                    allowedDomains: {
                        type: [String],
                        default: []
                    }
                },
                required: true,
                _id: false
            }
        },
        required: [true, "No auth tokens were provided during registration."],
        _id: false
    },
    subscriptionPlan: {
        type: String,
        enum: ["free", "premium"],
        default: "free"
    },
    stores: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Store",
        default: []
    }
});

userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = hash(this.password);
    }
    next();
});

userSchema.methods.comparePassword = function (password) {
    return this.password === hash(password);
};

const User = connection.model("User", userSchema);

export default User;
