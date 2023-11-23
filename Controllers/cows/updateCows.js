
import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const updateCow = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Cow.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        return next(new AppError("no cow found with that ID", 404));
    }
    console.log("the Cow is updated with ID:", updatedDoc._id);
    return res.json(updatedDoc);

});