import { User } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const getById = catchAsync(async (req, res) => {

  let requestId = req.params.id;
  let data = await User.findById({ _id: requestId });

  if (!data) {
    return next(new AppError("no user found with that ID", 404));
  }
  console.log("the user is selected with ID:", data._id);
  return res.status(200).json(data);
});