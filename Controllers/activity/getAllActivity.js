import { Activity } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getAllActivity = catchAsync(async (req, res) => {
    let data = await Activity.find();
    console.log("list of all Activity record  is selected !!");

    return res.status(200).json({
        message: "list of all Activity record  is selected !!",
        data
    })
});
