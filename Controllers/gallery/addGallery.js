import { Gallery } from "../../Models";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
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

    const result = await cloudinary.uploader.upload(
        req.files["backdropImage"][0].path
    );
    const newGallery = await Gallery.create({
        ...req.body,
        backdropImage: result.secure_url,
    });

    console.log("Gallery image  is created successfullty");

    return res.status(201).json({
        status: "Gallery image is created successfully",
        data: { newGallery },
    });
});