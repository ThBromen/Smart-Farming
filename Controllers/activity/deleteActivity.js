
import { Activity } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const deleteActivity = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Activity.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no Activity  found with that ID", 404));
    }

    const result = await Activity.deleteMany(data);
    console.log("the Activity is deleted with ID:", data._id);
    return res.status(202).json({
        message: "the Activity is deleted with ID",
        result
    })
});