
import mongoose from "mongoose";

const financialSchema = mongoose.Schema({
    Date: { type: Date, default: Date.now },
    sales: String,
    litresSold: String,
    animalEarTag: String,
    financeType: String,
    notes: String,
    dateOfRecord: String,
    paymentDate: String,
    amount: String,
    adminstrator: String
});
export const Financial = mongoose.model("Financial", financialSchema);