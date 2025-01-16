import express from "express";
import { config } from "dotenv";
import connectDatabase from "./utils/connectDatabase.js";
import authRouter from "./routes/auth.route.js";
import storeRouter from "./routes/store.route.js";
import productRouter from "./routes/product.route.js";
import corsConfig from "./config/cors.config.js";

const app = express();
const port = parseInt(process.env.PORT || "3000");

// Configurations
config();
app.use(corsConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/v1/auth", authRouter);
app.use("/v1/stores", storeRouter);
app.use("/v1/products", productRouter);

// Health check route
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.all("*", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const domain = req.headers.host;

    res.send(`IP Address: ${ip}, Domain: ${domain}`);
});

// Start server
app.listen(port, async () => {
    await connectDatabase();
    console.log(`> Server is live and running on port: ${port}`);
});
