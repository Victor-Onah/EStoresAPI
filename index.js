import express from "express";
import { config } from "dotenv";
import { createServer as createViteServer } from "vite";
import connectDatabase from "./utils/connectDatabase.js";
import authRouter from "./routes/auth.route.js";
import storeRouter from "./routes/store.route.js";
import productRouter from "./routes/product.route.js";
import corsConfig from "./configs/cors.config.js";

// Configuration for reading from environment files
config();

const isDevEnv = process.env.NODE_ENV !== "production";
const app = express();
const port = parseInt(process.env.PORT || "3000");
const vite = await createViteServer({ appType: "custom", base: "/", server: { middlewareMode: true } });

console.log("Is dev env", isDevEnv);

// Middleware configurations
app.use(corsConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (isDevEnv) console.log("Adding vite to middleware"), app.use(vite.middlewares);

// API Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/stores", storeRouter);
app.use("/api/v1/products", productRouter);

// Serve HTML using Vite's transformIndexHtml
app.get("/", async (req, res) => {
    if (isDevEnv) {
        const url = req.originalUrl;
        const html = await vite.transformIndexHtml(
            url,
            `
                <!DOCTYPE html>
                <html lang="en">
                <head><title>Vite + Express</title></head>
                <body>
                    <div id="app"></div>
                    <script type="module" src="/views/main.jsx"></script>
                </body>
                </html>
            `
        );
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } else {
        // res.sendFile(path.resolve(distPath, "index.html"));
        res.send("Hello");
    }
});

// Start server
app.listen(port, async () => {
    await connectDatabase();
    console.log(`> Server is live and running on port: ${port}`);
});
