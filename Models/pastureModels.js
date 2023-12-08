
import mongoose from "mongoose";

const PastureSchema = mongoose.Schema({
    pastureName: { type: String, required: true },
    Ouner: { type: String, required: true },
    area: { type: String, required: true },
    numberOfCattles: String

});
export const Pasture = mongoose.model("Pasture", PastureSchema);