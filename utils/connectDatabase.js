import mongoose from "../configs/database.config.js";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN_URL);
        console.log("> Database connection was successful.");
    } catch (error) {
        console.error("Error while connecting to database", error);
        process.exit("The server has been stopped because of failure to create connection with database.");
    }
};

export default connectDatabase;
