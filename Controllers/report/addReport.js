
import {
    Financial, User, Activity, Gallery, Pasture, Cow,
    Treatment, Breeding, Castration, Weaning, Newbirth,
    Sales, Purginacy,
    DeadActivity, PromotedToBull
} from "../../Models"

import { catchAsync } from "../Error/catchAsync";


export const getUsers = catchAsync(async (req, res) => {
    let data = await User.find();
    console.log("report  of users record !!");

    return res.status(200).json({
        message: "report  of Users:",
        data

    })
});

export const getGallery = catchAsync(async (req, res) => {
    let data = await Gallery.find();
    console.log("All of Gallery   is selected !!");

    return res.status(200).json({
        message: "All of Gallery record:",
        data

    })
});

export const getPasture = catchAsync(async (req, res) => {
    let data = await Pasture.find();
    console.log("All  of Pasture is selected !!");

    return res.status(200).json({
        message: "list of Pasture record:",
        data

    })
});


export const getActivity = catchAsync(async (req, res) => {
    let data = await Activity.find();
    console.log("All of Activity record !!");

    return res.status(200).json({
        message: "All of Activity record:",
        data

    })
});


export const getTreatment = catchAsync(async (req, res) => {
    let data = await Treatment.find();
    console.log("All of Treatment");

    return res.status(200).json({
        message: "All of Treatment record:",
        data

    })
});


export const getFinancial = catchAsync(async (req, res) => {
    let data = await Financial.find();
    console.log("list of financial record  is selected !!");

    return res.status(200).json({
        message: "list of financial record:",
        data

    })
});


export const getCastration = catchAsync(async (req, res) => {
    let data = await Castration.find();
    console.log("all of Castration record !!");

    return res.status(200).json({
        message: "all of Castration record:",
        data

    })
});


export const getNewbirth = catchAsync(async (req, res) => {
    let data = await Newbirth.find();
    console.log("list of Newbirth record  !!");

    return res.status(200).json({
        message: "list of Newbirth record:",
        data

    })
});


export const getSales = catchAsync(async (req, res) => {
    let data = await Sales.find();
    console.log("list of Sales record  !!");

    return res.status(200).json({
        message: "list of Sales record:",
        data

    })
});



export const getWeaning = catchAsync(async (req, res) => {
    let data = await Weaning.find();
    console.log("list of Weaning record  !!");

    return res.status(200).json({
        message: "list of Weaning record:",
        data

    })
});

export const getCow = catchAsync(async (req, res) => {
    let data = await Cow.find();
    console.log("list of Cow record  !!");

    return res.status(200).json({
        message: "list of Cow record:",
        data

    })
});





export const getBreeding = catchAsync(async (req, res) => {
    let data = await Breeding.find();
    console.log("list of Breeding record  !!");

    return res.status(200).json({
        message: "list of Breeding record:",
        data

    })
});


export const getDeadCow = catchAsync(async (req, res) => {
    let data = await DeadActivity.find();
    console.log("list of Dead cow   !!");

    return res.status(200).json({
        message: "list of Dead cow:",
        data

    })
});

export const getPromoted = catchAsync(async (req, res) => {
    let data = await PromotedToBull.find();
    console.log("list of cow Promoted To Bull!!");

    return res.status(200).json({
        message: "list of cow Promoted To Bull:",
        data

    })
});

export const getPagination = catchAsync(async (req, res) => {
    let data = await Purginacy.find();
    console.log("list of Purginacy !!");

    return res.status(200).json({
        message: "list of Purginacy:",
        data

    })
});