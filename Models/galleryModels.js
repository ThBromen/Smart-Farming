import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    title: String,
    backdropimage: { type: String },
    gallery: { type: String, required: true },
    description: String
});
export const Gallery = mongoose.model("Gallery", gallerySchema);