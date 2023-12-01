
import { User } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const updateUser = catchAsync(async (req, res) => {
  const requestId = req.params.id;

  const updatedDoc = await User.findByIdAndUpdate(requestId, req.body,
    { new: true, useFindAndModify: false });

  if (!updatedDoc) {
    next(new AppError("no user found with that ID", 404));
  }
  console.log("the user is updated with ID:", updatedDoc._id);
  return res.json(updatedDoc);

});