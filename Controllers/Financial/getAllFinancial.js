import { Financial } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getFinancial = catchAsync(async (req, res) => {
    let data = await Financial.find();
    console.log("list of financial record  is selected !!");

    return res.status(200).json({
        message: "list of financial record  !!",
        data

    })
});

