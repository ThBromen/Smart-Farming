import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";


export const getCowByEarTag = catchAsync(async (req, res) => {
    let requestEarTag = req.params.earTag;
    let data = await Cow.find({ type: requestEarTag });

    if (!data) {
        return next(new AppError("no cow found with that EarTag", 404));
    }
    console.log("the All Cow  is selected with EarTag:", data._id);
    res.status(200).json(data);
});