import { Cow, Category, Breed } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const recordCow = catchAsync(async (req, res) => {
    const { earTag, status, dateOfGivingBirth,
        calfNumber, lactating, numberOfCalving, litresOfMilkItProduces } = req.body;

    const { categoryId } = req.params;
    const { breedId } = req.params;

    const categoryType = await Category.findById(categoryId);
    const breedType = await Breed.findById(breedId);
    console.log("object", breedType, categoryType)
    const newCow = await Cow.create(req.body);

    console.log("New Cow was created successfully");

    return res.status(201).json({
        message: "New Cow registered successfully",
        newCow,
    });
});









export const recordHeifers = catchAsync(async (req, res) => {
    const { earTag, type, breedType, status, calfNumber, lactating,
        numberOfCalving, litresOfMilkItProduces, inseminatioPeriod } = req.body;

    const newHeifer = await Cow.create(req.body);

    console.log("New heifer was created successfully");

    return res.status(201).json({
        message: "New heifer registered successfully",
        newHeifer,

    });
});



export const recordCalves = catchAsync(async (req, res) => {
    const { earTag, type, breedType, mothersEarTag, dateOfBirth,
        silesEarTag, weightAtBirth, wearningPeriod } = req.body;

    const newCalve = await Cow.create(req.body);

    console.log("New Calve was created successfully");

    return res.status(201).json({
        message: "New Calve registered successfully",
        newCalve,
    });
});


export const recordBull = catchAsync(async (req, res) => {
    const { earTag, type, breedType, mothersEarTag, dateOfBirth,
        silesEarTag, weightAtBirth, wearningPeriod } = req.body;

    const newBull = await Cow.create(req.body);

    console.log("New Bull was created successfully");

    return res.status(201).json({
        message: "New Bull registered successfully",
        newBull,

    });
});