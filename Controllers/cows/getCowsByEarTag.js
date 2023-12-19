import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";


export const getCowByEarTag = catchAsync(async (req, res, next) => {
    let requestEarTag = req.params.earTag;
    let data = await Cow.findOne({ earTag: requestEarTag });

    if (!data) {
        return next(new AppError("No cow found with that earTag", 404));
    }

    console.log("The cow is selected with earTag:", data.earTag);
    res.status(200).json({
        message: "cow Details:",
        data
    });
});
