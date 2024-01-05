import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    Date: { type: Date, default: Date.now },
    title: String,
    backdropImage: { type: String },
    description: String
});
export const Gallery = mongoose.model("Gallery", gallerySchema);