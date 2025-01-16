import mongoose from "mongoose";

export const connection = mongoose.connection.useDb("EStoresAPI");

export default mongoose;
