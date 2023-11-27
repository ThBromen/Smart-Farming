import { Category } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const addCowCategory = catchAsync(async (req, res) => {

    const newCategory = await Category.create(req.body);

    console.log("new Cow Category was created successfully");

    return res.status(201).json({
        message: " Cow Category registered successfully",
        newCategory

    });
});

export const deleteCowCategory = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Category.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Cow Category  found with that ID", 404));
    }

    const result = await Category.deleteMany(data);
    console.log("the Cow Category is deleted with ID:", data._id);
    return res.send(result);
});

export const getCowCategory = catchAsync(async (req, res) => {
    let data = await Category.find();
    console.log("list of Cow Category is selected !!");

    return res.status(200).json({
        message: "list of Cow Category is selected  !!",
        data

    })
});

export const getCowCategoryById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Category.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Cow Category found with that ID", 404));
    }
    console.log("the Cow Category is selected with ID:", data._id);
    res.status(200).json(data);
});
