
import mongoose from "mongoose";

const categorySchema = mongoose.Schema({

    categoryType: String,
    description: String
});
export const Category = mongoose.model("Category", categorySchema);



const breedSchema = mongoose.Schema({


    breedType: String,
    description: String
});

export const Breed = mongoose.model("Breed", breedSchema);


const cowSchema = mongoose.Schema({

    earTag: { type: String, required: true },

    categoryType: {
        type: String,
        required: true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category"
    },

    breedType: {

        type: String,
        required: true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Breed"
    },
    lifeStatus: {
        type: String, required: true, default: "user"
    },

    status: {
        type: String, required: true
    },

    dateOfGivingBirth: String,
    calfNumber: String,
    lactating: String,
    numberOfCalving: String,
    litresOfMilkItProduces: String,
    dateOfBirth: String,
    mothersEarTag: String,
    silesEarTag: { type: String },
    weightAtBirth: { type: String },
    wearningPeriod: { type: String },
    wearningWeight: { type: String },
    castrationPeriod: { type: String },
    inseminatioPeriod: String,
    whereItWasPurchased: String,
    purchasedDate: String,
    purchasedPrice: String,
    purchasedWeight: String,
    yearlingDate: String,
    yearlingWeight: String

});
export const Cow = mongoose.model("Cow", cowSchema);





// Category.find()
//     .populate("categoryType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error));


// Breed.find()
//     .populate("breedType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error)); 