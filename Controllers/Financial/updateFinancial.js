
import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const updateFinancial = catchAsync(async (req, res) => {
    const requestId = req.params.id;

    const updatedDoc = await Financial.findByIdAndUpdate(requestId, req.body,
        { new: true, useFindAndModify: false });

    if (!updatedDoc) {
        return next(new AppError("no financial record found with that ID", 404));
    }
    console.log("the financial record is updated with ID:", updatedDoc._id);
    res.json(updatedDoc);

});