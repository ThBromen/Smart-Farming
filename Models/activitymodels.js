
import mongoose from "mongoose";

const salesSchema = mongoose.Schema({

    earTag: String,
    SaleDate: String,
    SalePrice: String,
    SoldTo: String,
    notes: String,

});

export const Sales = mongoose.model("Sales", salesSchema);



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
    Note: String

});
export const Activity = mongoose.model("Activity", activitySchema);





const breedingSchema = mongoose.Schema({

    earTag: String,
    activityType: { type: String, default: "Breeding" },
    breedingDate: String,
    methodOfBreeding: String,
    endDate: String
});
export const Breeding = mongoose.model("Breeding", breedingSchema);




const treatmentSchema = mongoose.Schema({

    activityType: { type: String, default: "Treatment" },
    description: String,
    earTag: String,
    activityType: String,
    treatmentDate: String,
    diseaseDiagnosed: String,
    dosageInml: String,
    routeType: String,
    vaccinationDate: String,
    vaccineAdministered: String
});
export const Treatment = mongoose.model("Treatment", treatmentSchema);




const castrationSchema = mongoose.Schema({

    earTag: String,
    activityType: { type: String, default: "Castration" },
    castrationdDate: String,
    CastratedBy: String,
    castrationdMethod: String,
    howItWent: { type: String, default: "Successful" },
    Note: String
});
export const Castration = mongoose.model("Castration", castrationSchema);



const weaningSchema = mongoose.Schema({

    earTag: String,
    activityType: { type: String, default: "weaning" },
    weaningDate: String,
    WeaningWeight: String
});
export const Weaning = mongoose.model("Weaning", weaningSchema);




// Category.find()
//     .populate("categoryType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error));


// Breed.find()
//     .populate("breedType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error)); 