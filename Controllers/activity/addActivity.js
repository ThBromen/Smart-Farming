import { Activity, Cow, Breeding, Castration, Treatment, Weaning, Sales, Newbirth } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const recordActivity = catchAsync(async (req, res) => {
    const { earTag, activityType, treatmentDate, diseaseDiagnosed, dosageInml,
        routeType, vaccinationDate, vaccineAdministered, treatmentCost } = req.body;


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
            routeType, vaccinationDate, vaccineAdministered, treatmentCost } = req.body;


        const newTreatment = await Treatment.create(req.body);
        const newActivity = await Activity.create(req.body);

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
    const { earTag, castrationdDate, CastratedBy, castrationdMethod, Note
    } = req.body;


    const newCastration = await Castration.create(req.body);
    const newActivity = await Activity.create(req.body);

    console.log("New Castration activity was created successfully");

    return res.status(201).json({
        message: "New Castration activity created successfully",
        newCastration,

    });
});


export const recordWeaning = catchAsync(async (req, res) => {
    const { earTag, weaningDate, WeaningWeight } = req.body;


    const newWeaning = await Weaning.create(req.body);
    const newActivity = await Activity.create(req.body);

    console.log("New weaning activity was created successfully");

    return res.status(201).json({
        message: "New weaning activity created successfully",
        newWeaning,
    });
});


export const recordBreeding = catchAsync(async (req, res) => {
    const { earTag, breedingDate, methodOfBreeding, endDate } = req.body;


    const newBreeding = await Breeding.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New Breeding activity was created successfully");

    return res.status(201).json({
        message: "New Breeding activity created successfully",
        newBreeding,

    });
});





export const recordSales = catchAsync(async (req, res) => {
    const { earTag, SaleDate, SalePrice, SoldTo, notes
    } = req.body;


    const newSales = await Sales.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New Sales  was created successfully");

    return res.status(201).json({
        message: "New Sales  created successfully",
        newSales,

    });
});


export const recordNewbirth = catchAsync(async (req, res) => {
    const { earTag, SaleDate, SalePrice, SoldTo, notes
    } = req.body;


    const newBirth = await Newbirth.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New Newbirth  was created successfully");

    return res.status(201).json({
        message: "New Newbirth  created successfully",
        newBirth
    });
});

export const deleteActivity = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Activity.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Activity  found with that ID", 404));
    }

    const result = await Activity.deleteMany(data);
    console.log("the Activity is deleted with ID:", data._id);
    return res.status(202).json({
        message: "the Activity is deleted with ID",
        result
    })
});


export const getActivityById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Activity.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("Activity  is not found with that ID", 404));
    }
    console.log("the Activity  is selected with ID:", data._id);
    res.status(200).json(data);
});

export const getActivityBytype = catchAsync(async (req, res) => {

    let requestactivityType = req.params.activityType;
    let data = await Activity.find({ type: requestactivityType });

    if (!data) {
        return next(new AppError("no Activity  found with that activityType", 404));
    }
    console.log("the Activity is selected with activityType:", data.activityType);

    return res.status(200).json({
        message: "the Activity is selected with activityType",
        data
    });
});

export const getAllActivity = catchAsync(async (req, res) => {
    let data = await Activity.find();
    console.log("list of all Activity record  is selected !!");

    return res.status(200).json({
        message: "list of all Activity record  is selected !!",
        data
    })
});

export const updateActivity = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Activity.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        next(new AppError("no Activity  found with that ID", 404));
    }
    console.log("Activity  is updated with ID:", updatedDoc._id);
    return res.json(updatedDoc);

});

