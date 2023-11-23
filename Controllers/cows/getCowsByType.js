import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getCowBytype = catchAsync(async (req, res) => {

    let requestType = req.params.type;
    let data = await Cow.find({ type: requestType });

    if (!data) {
        return next(new AppError("no cow  found with that ID", 404));
    }
    console.log("the Cow is selected with ID:", data._id);
    return res.status(200).json(data);
});