import { Activity, ActivityType } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const recordActivity = catchAsync(async (req, res) => {
    const { earTag, activityType, treatmentDate, diseaseDiagnosed, dosageInml,
        routeType, vaccinationDate, vaccineAdministered, } = req.body;

    const newActivity = await Activity.create(req.body);

    console.log("New  activity was created successfully");

    return res.status(201).json({
        message: "New  activity created successfully",
        newActivity,
    });
});




export const recordTreatment = catchAsync(async (req, res) => {
    try {
        const { earTag, treatmentDate, diseaseDiagnosed, dosageInml,
            routeType, vaccinationDate, vaccineAdministered, } = req.body;

        const { activityId } = req.params;
        const activityType = await ActivityType.findById(activityId);

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
    const { activityId } = req.params;
    const activityType = await ActivityType.findById(activityId);

    const newCastration = await Activity.create(req.body);

    console.log("New Castration activity was created successfully");

    return res.status(201).json({
        message: "New Castration activity created successfully",
        newCastration,

    });
});



export const recordWeaning = catchAsync(async (req, res) => {
    const { earTag, weaningDate, WeaningWeight } = req.body;

    const { activityId } = req.params;
    const activityType = await ActivityType.findById(activityId);

    const newWeaning = await Activity.create(req.body);

    console.log("New weaning activity was created successfully");

    return res.status(201).json({
        message: "New weaning activity created successfully",
        newWeaning,
    });
});


export const recordBreeding = catchAsync(async (req, res) => {
    const { earTag, breedingDate, methodOfBreeding, endDate, howItWent } = req.body;

    const { activityId } = req.params;
    const activityType = await ActivityType.findById(activityId);

    const newBreeding = await Activity.create(req.body);

    console.log("New Breeding activity was created successfully");

    return res.status(201).json({
        message: "New Breeding activity created successfully",
        newBreeding,

    });
});