import { Activity } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getActivityById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Activity.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("Activity  is not found with that ID", 404));
    }
    console.log("the Activity  is selected with ID:", data._id);
    res.status(200).json(data);
});