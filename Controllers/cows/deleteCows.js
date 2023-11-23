
import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const deleteCow = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Financial.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no financial recold  found with that ID", 404));
    }

    const result = await Financial.deleteMany(data);
    console.log("the financial recold is deleted with ID:", data._id);
    return res.send(result);


});