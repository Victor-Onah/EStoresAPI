import cors from "cors";
import { config } from "dotenv";

config();

const corsConfig = cors({
    allowedHeaders: ["Authorization", "Content-Type"],
    allowedMethods: ["GET", "POST", "PUT", "DELETE"]
});

export default corsConfig;
