import { Breed } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const addCowBreed = catchAsync(async (req, res) => {

    const newBreed = await Breed.create(req.body);

    console.log("new Breed was created successfully");

    return res.status(201).json({
        message: " Breed registered successfully",
        newBreed,

    });
});


export const deleteCowBreed = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Breed.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no breed  found with that ID", 404));
    }

    const result = await Breed.deleteMany(data);
    console.log("the breed is deleted with ID:", data._id);
    return res.send(result);
});



export const getCowBreed = catchAsync(async (req, res) => {
    let data = await Breed.find();
    console.log("list of Cow Breed is selected !!");

    return res.status(200).json({
        message: "list of Cow Breed is selected  !!",
        data

    })
});



export const getCowBreedById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Breed.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Cow Breed found with that ID", 404));
    }
    console.log("the Cow Breed is selected with ID:", data._id);
    res.status(200).json(data);
});