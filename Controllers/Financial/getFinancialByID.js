import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getFinancialById = catchAsync(async (req, res) => {

    let requestId = req.params.id;
    let data = await Financial.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no financial record found with that ID", 404));
    }
    console.log("the financial record is selected with ID:", data._id);
    res.status(200).json(data);
});