
import mongoose from "mongoose";

const salesSchema = mongoose.Schema({

    earTag: String,
    activityType: { type: String, default: "Sales" },
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
    },

    activityType: {
        type: String,
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
    activityType: { type: String, default: "Weaning" },
    weaningDate: String,
    WeaningWeight: String
});
export const Weaning = mongoose.model("Weaning", weaningSchema);




const NewBirthSchema = mongoose.Schema({

    earTag: String,
    activityType: { type: String, default: "Newbirth" },
    BirthDate: String,
    BirthWeight: String,
    notes: String
});
export const Newbirth = mongoose.model("Newbirth", NewBirthSchema);


// Newbirth: EarTag, BirthDate, Birth weight, Notes


// Category.find()
//     .populate("categoryType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error));


// Breed.find()
//     .populate("breedType")
//     .then(p => console.log(p))
//     .catch(error => console.log(error)); 