
import mongoose from "mongoose";

const cowSchema = mongoose.Schema({
    earTag: { type: String, required: true },
    type: { type: String, required: true },
    // : { type: String, required: true }
});
export const Cow = mongoose.model("Cow", cowSchema);