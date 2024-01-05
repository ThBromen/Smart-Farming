
import mongoose from "mongoose";

const workerSchema = mongoose.Schema({
    Date: { type: Date, default: Date.now },
    email: { type: String },
    fullNames: String,
    phoneNumber: String,
    location: String
});
export const Worker = mongoose.model("Worker", workerSchema);


