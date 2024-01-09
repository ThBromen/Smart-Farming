import { Pasture } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const addPasture = catchAsync(async (req, res) => {
    const newFinancial = await Pasture.create(req.body);

    console.log("New Pasture was created successfully", newFinancial);

    return res.status(201).json({
        message: "Pasture registered successfully",
        newFinancial,
    });
});

export const deletePasture = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    try {
        let data = await Pasture.findById({ _id: requestId });

        if (!data) {
            throw new Error("No Pasture found with that ID");
        }

        const result = await Pasture.deleteOne({ _id: requestId });

        if (result.deletedCount > 0) {
            console.log("The Pasture is deleted with ID:", data._id);
            return res.send({ message: "Pasture deleted successfully" });
        } else {
            throw new Error("Failed to delete Pasture");
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ error: "Internal Server Error" });
    }
});

export const getPasture = catchAsync(async (req, res) => {
    let data = await Pasture.find();
    console.log("List of Pasture is selected!!");

    return res.status(200).json({
        message: "List of Pasture:",
        data,
    });
});

export const getPastureById = catchAsync(async (req, res) => {
    let requestId = req.params.id;

    try {
        let data = await Pasture.findById({ _id: requestId });

        if (!data) {
            throw new Error("No Pasture found with that ID");
        }

        console.log("The Pasture is selected with ID:", data._id);
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        return res.status(404).json({ error: "No Pasture found with that ID" });
    }
});

export const updatePasture = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    try {
        const updatedDoc = await Pasture.findByIdAndUpdate(
            requestId,
            req.body,
            { new: true, useFindAndModify: false }
        );

        if (!updatedDoc) {
            throw new Error("No Pasture record found with that ID");
        }

        console.log("The Pasture is updated with ID:", updatedDoc._id);
        return res.json(updatedDoc);
    } catch (error) {
        console.error(error.message);
        return res.status(404).json({ error: "No Pasture record found with that ID" });
    }
});
