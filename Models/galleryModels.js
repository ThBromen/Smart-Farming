import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    title: String,
    backdropimage: { type: String },
    description: String
});
export const Gallery = mongoose.model("Gallery", gallerySchema);