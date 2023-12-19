
import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const deleteCow = catchAsync(async (req, res, next) => {
    try {
        const requestEarTag = req.params.earTag;
        const data = await Cow.findOne({ earTag: requestEarTag });

        if (!data) {
            return next(new AppError("No cow found with that earTag", 404));
        }

        // Delete the cow document
        const result = await Cow.deleteOne({ earTag: requestEarTag });

        // Log the success and send the result as a response
        console.log("The cow is deleted with ear tag:", requestEarTag);
        return res.status(200).json({
            status: "success",
            message: "Cow deleted successfully",
            data: result
        });
    } catch (error) {
        return next(new AppError("Internal Server Error", 500));
    }
});
