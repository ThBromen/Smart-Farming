
import mongoose from "mongoose";

const financialSchema = mongoose.Schema({
    sales: { type: String, required: true },
    litresSold: { type: String, required: true },
    animalEarTag: { type: String, required: true }
});
export const Financial = mongoose.model("Financial", financialSchema);