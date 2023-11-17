import { comparePassword, hashPassword } from "../../utils";
import { User } from "../../Models";
import { catchAsync } from "../Error/catchAsync";

export const changepassword = catchAsync(async (req, res) => {
    const { currentpassword, newpassword } = req.body;
    const { userId } = req;
    const user = await User.findById(userId);

    if (!user) {
        return next(new AppError("no contact found with that ID", 404));
    }

    let isPassword = await comparePassword(currentpassword, user.password);
    if (!isPassword) {
        return res.status(401).json({
            message: "The Current password is incorrect",
        });
    }

    let hashedPassword = await hashPassword(newpassword);

    user.password = hashedPassword;
    user.save();

    res.status(200).json({
        message: "password changed successfully",
    });
});