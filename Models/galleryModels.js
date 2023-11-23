import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    title: String,
    backdropImage: { type: String },
    description: String
});
export const Gallery = mongoose.model("Gallery", gallerySchema);