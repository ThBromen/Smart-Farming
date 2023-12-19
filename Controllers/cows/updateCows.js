import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const updateCow = catchAsync(async (req, res, next) => {
    try {
        const requestEarTag = req.params.earTag;

        const updatedDoc = await Cow.findOneAndUpdate(
            { earTag: requestEarTag },
            req.body,
            { new: true, useFindAndModify: false }
        );

        if (!updatedDoc) {
            return next(new AppError("No cow found with that earTag", 404));
        }

        // Log the success
        console.log("The cow is updated with ear tag:", updatedDoc.earTag);

        // Send a response with status, message, and data
        return res.status(200).json({
            status: "success",
            message: "Cow updated successfully",
            data: updatedDoc
        });

    } catch (error) {
        // Handle unexpected errors
        return next(new AppError("Internal Server Error", 500));
    }
});
