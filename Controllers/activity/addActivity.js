import { Activity, Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const recordActivity = catchAsync(async (req, res) => {
    const { earTag, activityType, treatmentDate, diseaseDiagnosed, dosageInml,
        routeType, vaccinationDate, vaccineAdministered, treatmentCost } = req.body;

    // const { earTagId } = req.params;
    // const earTagep = await Cow.findById(earTagId);
    // earTag = earTagep.earTage;

    const newActivity = await Activity.create(req.body);

    console.log("New  activity was created successfully");

    return res.status(201).json({
        message: "New  activity created successfully",
        newActivity,
    });
});




export const recordTreatment = catchAsync(async (req, res) => {
    try {
        const { earTag, activityType, treatmentDate, diseaseDiagnosed, dosageInml,
            routeType, vaccinationDate, vaccineAdministered, treatmentCost } = req.body;



        const newTreatment = await Activity.create(req.body);

        console.log("New Treatment activity was created successfully");

        return res.status(201).json({
            message: "New Treatment activity created successfully",
            newTreatment,
        });
    } catch (error) {
        console.error("Error creating treatment activity:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});







export const recordCastration = catchAsync(async (req, res) => {
    const { earTag, castrationdDate, CastratedBy, castrationdMethod,
        howItWent } = req.body;

    const { earTagId } = req.params;
    const earTagep = await Cow.findById(earTagId);
    earTag = earTagep.earTage;

    const newCastration = await Activity.create(req.body);

    console.log("New Castration activity was created successfully");

    return res.status(201).json({
        message: "New Castration activity created successfully",
        newCastration,

    });
});



export const recordWeaning = catchAsync(async (req, res) => {
    const { earTag, weaningDate, WeaningWeight } = req.body;

    const { earTagId } = req.params;
    const earTagep = await Cow.findById(earTagId);

    earTag = earTagep.earTage;

    const newWeaning = await Activity.create(req.body);

    console.log("New weaning activity was created successfully");

    return res.status(201).json({
        message: "New weaning activity created successfully",
        newWeaning,
    });
});


export const recordBreeding = catchAsync(async (req, res) => {
    const { earTag, breedingDate, methodOfBreeding, endDate, howItWent } = req.body;

    const { earTagId } = req.params;
    const earTagep = await Cow.findById(earTagId);

    earTag = earTagep.earTage;

    const newBreeding = await Activity.create(req.body);

    console.log("New Breeding activity was created successfully");

    return res.status(201).json({
        message: "New Breeding activity created successfully",
        newBreeding,

    });
});