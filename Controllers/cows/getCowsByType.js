import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getCowBytype = catchAsync(async (req, res) => {

    let requestCategoryType = req.params.categoryType;
    let data = await Cow.find({ type: requestCategoryType });

    if (!data) {
        return next(new AppError("no cow  found with that categoryType", 404));
    }
    console.log("the Cow is selected with categoryType:", data._id);
    return res.status(200).json(data);
});