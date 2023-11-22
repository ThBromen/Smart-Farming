
import mongoose from "mongoose";

const cowSchema = mongoose.Schema({
    earTag: { type: String, required: true },

    type: { type: String, required: true },

    breedType: { type: String, required: true },

    status: { type: String, required: true },
    dateOfGivingBirth: String,
    calfNumber: string,
    lactating: String,
    numberOfCalving: string,
    litresOfMilkItProduces: string,
    dateOfBirth: string,
    mothersEarTag: string,
    silesEarTag: { type: String },
    weightAtBirth: { type: String },
    wearningPeriod: { type: String },
    castrationPeriod: { type: String },
    inseminatioPeriod: String,
    whereItWasPurchased: String,
    purchasedDate: String,
    weight: String

});
export const Cow = mongoose.model("Cow", cowSchema);

const categorySchema = mongoose.Schema({

    type: { type: String, required: true },
})
export const Category = mongoose.model("Category", categorySchema);