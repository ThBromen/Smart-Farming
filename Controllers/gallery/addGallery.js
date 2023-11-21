import { Gallery } from "../../Models";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import path from "path";
import { catchAsync } from "../Error/catchAsync";


dotenv.config();
cloudinary.v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


export const addGallery = catchAsync(async (req, res) => {

    const tourImagesArray = [];
    const backdropimage = await cloudinary.uploader.upload(
        req.files["backdropimage"][0].path
    );
    for (let index = 0; index < req.files["gallery"].length; index++) {
        tourImagesArray.push(
            await cloudinary.uploader.upload(req.files["gallery"][index].path)
        );
    }
    console.log("images:", tourImagesArray);

    const newGallery = await Gallery.create({
        ...req.body,
        backdropimage: backdropimage.secure_url,
        gallery: tourImagesArray.map((item) => item.secure_url),
    });

    console.log("tours is created successfullty");
    return res.status(201).json({
        status: "Tour created successfully",
        data: { newGallery },
    });
});