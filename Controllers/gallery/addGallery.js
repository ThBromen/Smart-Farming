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

    // Ensure that the request contains the 'backdropImage' file
    if (!req.files || !req.files["backdropImage"] || req.files["backdropImage"].length === 0) {
        return res.status(400).json({
            error: "No backdrop image provided",
        });
    }

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



export const deleteGallery = catchAsync(async (req, res) => {
    const requestId = req.params.id;
    let data = await Gallery.findById({ _id: requestId });

    if (!data) {
        return next(new AppError("no financial recold  found with that ID", 404));
    }

    const result = await Gallery.deleteMany(data);
    console.log("the financial recold is deleted with ID:", data._id);
    return res.send(result);


});


export const getGallery = catchAsync(async (req, res) => {
    let data = await Gallery.find();
    console.log("list of financial record  is selected !!");

    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }
    results.result = data.slice(startIndex, endIndex);

    if (page && limit) {
        return res.status(200).json({
            message: "list of users by pagination !!",
            results
        });
    }
    else {
        return res.status(200).json({
            message: "list of users !!",
            data
        });
    }

});
