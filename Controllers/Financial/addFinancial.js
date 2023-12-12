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

export const deleteFinancial = catchAsync(async (req, res, next) => {
    const requestId = req.params.id;

    try {
        const data = await Financial.findById({ _id: requestId });

        if (!data) {
            return res.status(404).json({
                status: 'fail',
                message: 'No financial record found with that ID',
            });
        }

        const result = await Financial.deleteOne({ _id: requestId });
        console.log("The financial record is deleted with ID:", requestId);
        return res.status(200).json({
            status: 'success',
            message: 'Financial record deleted successfully',
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error deleting financial record',
            error: error.message,
        });
    }
});



export const getFinancial = catchAsync(async (req, res) => {
    let data = await Financial.find();
    console.log("list of financial record  is selected !!");

    return res.status(200).json({
        message: "list of financial record:",
        data

    })
});


export const getFinancialById = catchAsync(async (req, res, next) => {
    const requestId = req.params.id;

    try {
        const data = await Financial.findById({ _id: requestId });

        if (!data) {
            return res.status(404).json({
                status: 'fail',
                message: 'No financial record found with that ID',
            });
        }

        console.log("The financial record is selected with ID:", data._id);
        return res.status(200).json({
            status: 'success',
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching financial record',
            error: error.message,
        });
    }
});





export const updateFinancial = catchAsync(async (req, res, next) => {
    const requestId = req.params.id;

    try {
        const updatedDoc = await Financial.findByIdAndUpdate(requestId, req.body,
            { new: true, useFindAndModify: false });

        if (!updatedDoc) {
            return res.status(404).json({
                status: 'fail',
                message: 'No financial record found with that ID',
            });
        }

        console.log("The financial record is updated with ID:", updatedDoc._id);
        return res.status(200).json({
            status: 'success',
            data: updatedDoc,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error updating financial record',
            error: error.message,
        });
    }
});

