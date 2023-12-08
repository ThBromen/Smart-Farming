import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const addFinancial = catchAsync(async (req, res) => {

    const newFinancial = await Financial.create(req.body);

    console.log("new Financial was created successfully", newFinancial);

    return res.status(201).json({
        message: " Financial registered successfully",
        newFinancial,

    });
});

export const deleteFinancial = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Financial.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no financial recold  found with that ID", 404));
    }

    const result = await Financial.deleteMany(data);
    console.log("the financial recold is deleted with ID:", data._id);
    return res.send(result);


});


export const getFinancial = catchAsync(async (req, res) => {
    let data = await Financial.find();
    console.log("list of financial record  is selected !!");

    return res.status(200).json({
        message: "list of financial record:",
        data

    })
});


export const getFinancialById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Financial.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no financial record found with that ID", 404));
    }
    console.log("the financial record is selected with ID:", data._id);
    res.status(200).json(data);
});

export const updateFinancial = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Financial.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        next(new AppError("no financial record found with that ID", 404));
    }
    console.log("the financial record is updated with ID:", updatedDoc._id);
    return res.json(updatedDoc);

});
