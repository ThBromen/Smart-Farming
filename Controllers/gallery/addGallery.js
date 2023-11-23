import { Gallery } from "../../Models";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import path from "path";
import { catchAsync } from "../Error/catchAsync";

// inserting cloud for uploading an images

dotenv.config();
cloudinary.v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

export const addGallery = catchAsync(async (req, res) => {

    const backdropImage = await cloudinary.uploader.upload(
        req.files["backdropimage"][0].path
    );
    const newGallery = await Gallery.create({
        ...req.body,
        backdropImage: backdropImage.secure_url,
    });

    console.log("tours is created successfullty");
    return res.status(201).json({
        status: "Tour created successfully",
        data: { newGallery },
    });
});