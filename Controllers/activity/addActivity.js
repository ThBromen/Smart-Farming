import {
    Activity, Breeding, Castration, Treatment, Weaning, Sales, Newbirth,
    DeadActivity, Cow, Purginacy, PromotedToBull
} from "../../Models";
import mongoose from "mongoose";
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
    const { earTag, castrationdDate, CastratedBy, castrationdMethod, Notes
    } = req.body;


    const newCastration = await Castration.create(req.body);
    const newActivity = await Activity.create(req.body);

    console.log("New Castration activity was created successfully");

    return res.status(201).json({
        message: "New Castration activity created successfully",
        newCastration,

    });
});

export const recordDead = catchAsync(async (req, res) => {
    const { earTag, deathCouse, Deathdate, Notes
    } = req.body;


    const newDeath = await DeadActivity.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New dead activity was created successfully");

    return res.status(201).json({
        message: "New dead activity created successfully",
        newDeath,

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
    const { earTag, SaleDate, SalePrice, SoldTo, Notes
    } = req.body;


    const newSales = await Sales.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New Sales  was created successfully");

    return res.status(201).json({
        message: "New Sales  created successfully",
        newSales,

    });
});


export const recordPurginacy = catchAsync(async (req, res) => {
    const { earTag, checkDate, method, result, Notes
    } = req.body;


    const newPurginacy = await Purginacy.create(req.body);
    const newActivity = await Activity.create(req.body);

    const updatedCow = await Cow.findOneAndUpdate(
        { earTag },
        {
            $set: {
                earTag,
                checkDate,
                method,
                result,
                Notes,
            },
        },
        { new: true, upsert: true }
    );

    console.log("Cow updated successfully");




    console.log("New Purginacy check was created successfully");

    return res.status(201).json({
        message: "New Purginacy check  created successfully",
        newPurginacy
    });
});


export const recordNewbirth = catchAsync(async (req, res) => {
    const { earTag, BirthDate, BirthWeight, SoldTo, Notes
    } = req.body;


    const newBirth = await Newbirth.create(req.body);
    const newActivity = await Activity.create(req.body);



    console.log("New Newbirth  was created successfully");

    return res.status(201).json({
        message: "New Newbirth  created successfully",
        newBirth
    });
});


export const recordPromoted = catchAsync(async (req, res) => {
    const { earTag, promotionDate, Notes
    } = req.body;


    const Promoted = await PromotedToBull.create(req.body);
    const newActivity = await Activity.create(req.body);
    const updatedCow = await Cow.findOneAndUpdate(
        { earTag },
        {
            $set: {
                earTag,
                promotionDate,
            },
        },
        { new: true, upsert: true }
    );

    console.log("Cow updated successfully");
    console.log("New  cow Promoted To Bull  successfully");

    return res.status(201).json({
        message: "New cow Promoted To Bull  successfully",
        Promoted

    });
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

// Function to search in all models by ID
const searchByIdAcrossModels = async (id) => {
    const models = [
        Activity,
        Breeding,
        Castration,
        Treatment,
        Weaning,
        Sales,
        Newbirth,
        DeadActivity,
        Cow,
        Purginacy,
        PromotedToBull,
    ];

    const foundDocuments = [];

    for (const model of models) {
        const result = await model.findById(id).lean(); // Use lean() to get a plain JavaScript object
        if (result) {
            foundDocuments.push({
                model: model.modelName,
                document: result
            });
        }
    }

    return foundDocuments;
};

export const deleteActivity = catchAsync(async (req, res) => {
    try {
        const id = req.params.id;

        const foundDocuments = await searchByIdAcrossModels(id);

        if (foundDocuments.length === 0) {
            return res.status(404).json({ message: 'Document not found with id ' + id });
        }

        // Delete the found documents
        const deletionResults = [];
        for (const { model, document } of foundDocuments) {
            console.log(`Deleting Document from ${model}:`, document);

            // Check if the model has a deleteOne method
            const modelInstance = mongoose.model(model);
            if (modelInstance.deleteOne) {
                const deletionResult = await modelInstance.deleteOne({ _id: document._id });
                console.log(`Deletion Result from ${model}:`, deletionResult);

                deletionResults.push({
                    model,
                    deletionResult
                });
            } else {
                console.error(`Model ${model} does not have a deleteOne method`);
            }
        }

        return res.status(200).json({
            message: 'Documents deleted successfully',
            deletionResults
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            deletionResult
        });
    }
});

