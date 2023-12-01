import { Activity } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getActivityBytype = catchAsync(async (req, res) => {

    let requestactivityType = req.params.activityType;
    let data = await Activity.find({ type: requestactivityType });

    if (!data) {
        return next(new AppError("no Activity  found with that activityType", 404));
    }
    console.log("the Activity is selected with activityType:", data.activityType);

    return res.status(200).json({
        message: "the Activity is selected with activityType",
        data
    });
});