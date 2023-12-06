
import mongoose from "mongoose";

const activityTypeSchema = mongoose.Schema({

    activityType: String,
    description: String,
});
export const ActivityType = mongoose.model("ActivityType", activityTypeSchema);

const activitySchema = mongoose.Schema({

    earTag: {
        type: String,
        required: true,

        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Cow",
        // required: true
    },

    activityType: {
        type: String,

        // type: mongoose.Schema.Types.ObjectId,
        // ref: "ActivityType",
        // required: true
    },
    treatmentDate: String,
    diseaseDiagnosed: String,
    dosageInml: String,
    routeType: String,
    vaccinationDate: String,
    vaccineAdministered: String,
    castrationdDate: String,
    CastratedBy: String,
    castrationdMethod: String,
    howItWent: { type: String, default: "Successful" },
    weaningDate: String,
    WeaningWeight: String,
    breedingDate: String,
    methodOfBreeding: String,
    endDate: String,
    treatmentCost: String,
    notes: String

});
export const Activity = mongoose.model("Activity", activitySchema);





// Category.find()
//     .populate("categoryType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error));


// Breed.find()
//     .populate("breedType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error)); 