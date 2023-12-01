import { Cow } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getAllCow = catchAsync(async (req, res) => {
    let data = await Cow.find();
    console.log("list of all Cows record  is selected !!");

    return res.status(200).json({
        message: "list of Cows !!",
        data

    })
});

