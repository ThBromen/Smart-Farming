import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    gallery: { type: String, required: true }
});
export const Gallery = mongoose.model("Gallery", gallerySchema);