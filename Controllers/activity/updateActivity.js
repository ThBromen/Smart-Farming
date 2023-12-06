
import { Activity } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const updateActivity = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Activity.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        next(new AppError("no Activity  found with that ID", 404));
    }
    console.log("Activity  is updated with ID:", updatedDoc._id);
    return res.json(updatedDoc);

});