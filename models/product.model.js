import mongoose, { connection } from "../config/database.config.js";

const productSchema = new mongoose.Schema(
    {
        storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
        name: { type: String, required: [true, "The product name was not specified."] },
        price: { type: Number, required: [true, "No price was specified for the product."] },
        stockQuantity: { type: Number, required: [true, "No stock quantity was specified for the product."] },
        images: { type: [String], required: [true, "No image was provided for the product."] },
        sku: { type: String },
        description: { type: String },
        brand: { type: String },
        color: { type: String },
        category: { type: String },
        currency: { type: { code: String, symbol: String }, default: { code: "USD", symbol: "$" } },
        availability: { type: String, enum: ["InStock", "OutOfStock", "BackOrder"], default: "InStock" },
        variants: [
            {
                variantId: { type: String },
                name: { type: String },
                price: { type: Number },
                sku: { type: String },
                stockQuantity: { type: Number },
                images: [{ type: String }],
                _id: false
            }
        ],
        reviews: [
            {
                reviewer: { type: String },
                rating: { type: Number },
                comment: { type: String },
                date: { type: Date, default: Date.now },
                _id: false
            }
        ],
        weight: {
            type: {
                value: {
                    type: Number,
                    required: [true, "No value was specified for product weight"],
                    unit: { type: String, required: [true, "No unit was specified for product weight"] }
                },
                _id: false
            }
        },
        dimensions: {
            height: { type: Number },
            width: { type: Number },
            depth: { type: Number },
            _id: false
        },
        shipping: {
            cost: { type: Number },
            estimatedDelivery: { type: Date },
            _id: false
        },
        tags: [{ type: String }],
        promotions: [
            {
                type: { type: String, enum: ["Discount", "BOGO", "FreeShipping"] },
                description: { type: String },
                startDate: { type: Date },
                endDate: { type: Date },
                _id: false
            }
        ],
        extras: { type: mongoose.Schema.Types.Mixed, _id: false }
    },
    { timestamps: true }
);

productSchema.pre("save", function (next) {
    if (this?.stockQuantity < 1) this.availability = "OutOfStock";
    next();
});

productSchema.index({ sku: 1 });
productSchema.index({ name: 1 });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ brand: 1 });
productSchema.index({ availability: 1 });
productSchema.index({ stockQuantity: 1 });
productSchema.index({ name: 1, brand: 1 });
productSchema.index({ description: "text" });

const Product = connection.model("Product", productSchema);

export default Product;
