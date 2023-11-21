import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const recordFinancial = catchAsync(async (req, res) => {

    const newFinancial = await Financial.create(req.body);

    console.log("new Financial was created successfully");

    res.status(201).json({
        message: " Financial registered successfully",
        newFinancial,

    });
}); 