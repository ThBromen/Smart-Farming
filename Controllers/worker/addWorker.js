import { Worker } from "../../Models";
import { catchAsync } from "../Error/catchAsync";



export const addWorker = catchAsync(async (req, res) => {

    const newWorker = await Worker.create(req.body);

    console.log("new Worker was created successfully", newWorker);

    return res.status(201).json({
        message: " Worker Added successfully",
        newWorker,

    });
});



export const deleteWorker = catchAsync(async (req, res, next) => {
    const requestId = req.params.id;

    try {
        const data = await Worker.findById({ _id: requestId });

        if (!data) {
            return res.status(404).json({
                status: 'fail',
                message: 'No Worker record found with that ID',
            });
        }

        const result = await Worker.deleteOne({ _id: requestId });
        console.log("The Worker  is deleted with ID:", requestId);
        return res.status(200).json({
            status: 'success',
            message: 'Worker  deleted successfully',
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error deleting Worker record',
            error: error.message,
        });
    }
});


export const getWorker = catchAsync(async (req, res) => {
    let data = await Worker.find();
    console.log("list of Worker is selected !!");

    return res.status(200).json({
        message: "list of Worker:",
        data

    })
});



export const updateWorker = catchAsync(async (req, res, next) => {
    const workerId = req.params.id;

    try {
        const updatedWorker = await Worker.findByIdAndUpdate(
            workerId,
            req.body,
            { new: true, useFindAndModify: false }
        );

        if (!updatedWorker) {
            return res.status(404).json({
                status: 'fail',
                message: 'No worker found with that ID',
            });
        }

        console.log("Worker updated with ID:", workerId);
        return res.status(200).json({
            status: 'success',
            message: 'Worker updated successfully',
            data: updatedWorker,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error updating worker record',
            error: error.message,
        });
    }
});


export const getWorkerById = catchAsync(async (req, res) => {
    try {
        const workerId = req.params.id;
        const worker = await Worker.findById(workerId);

        if (!worker) {
            return res.status(404).json({
                status: 'fail',
                message: 'No worker found with that ID',
            });
        }

        console.log("Worker with ID selected!!");
        return res.status(200).json({
            message: "Worker details:",
            data: worker,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching worker details',
            error: error.message,
        });
    }
});