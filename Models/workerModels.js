
import mongoose from "mongoose";

const workerSchema = mongoose.Schema({
    email: { type: String },
    fullNames: String,
    phoneNumber: String,
    location: String
});
export const Worker = mongoose.model("Worker", workerSchema);


