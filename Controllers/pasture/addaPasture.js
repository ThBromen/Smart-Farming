import { Pasture } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const addPasture = catchAsync(async (req, res) => {

    const newFinancial = await Pasture.create(req.body);

    console.log("new Pasture was created successfully", newFinancial);

    return res.status(201).json({
        message: " Pasture registered successfully",
        newFinancial,

    });
});



export const deletePasture = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Pasture.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Pasture  found with that ID", 404));
    }

    const result = await Pasture.deleteMany(data);
    console.log("the Pasture is deleted with ID:", data._id);
    return res.send(result);


});


export const getPasture = catchAsync(async (req, res) => {
    let data = await Pasture.find();
    console.log("list of Pasture is selected !!");

    return res.status(200).json({
        message: "list of Pasture:",
        data

    })
});

export const getPastureById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Pasture.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Pasture found with that ID", 404));
    }
    console.log("the Pasture is selected with ID:", data._id);
    res.status(200).json(data);
});

export const updatePasture = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Pasture.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        next(new AppError("no Pasture record found with that ID", 404));
    }
    console.log("the Pasture is updated with ID:", updatedDoc._id);
    return res.json(updatedDoc);

});