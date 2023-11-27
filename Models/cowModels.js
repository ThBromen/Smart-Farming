
import mongoose from "mongoose";

const cowSchema = mongoose.Schema({

    earTag: { type: String, required: true },

    categoryType: { type: String, required: true },

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

    categoryType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cow"
    },
    description: String
});
export const Category = mongoose.model("Category", categorySchema);



const breedSchema = mongoose.Schema({


    breedType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cow"
    },
    description: String
});

export const Breed = mongoose.model("Breed", breedSchema);



Category.find()
    .populate("categoryType")
    .then(p => console.log(p))
    .catch(error => console.log(error));


Breed.find()
    .populate("breedType")
    .then(p => console.log(p))
    .catch(error => console.log(error)); 