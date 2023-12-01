import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now + ' ' + file.originalname)
    }
});
const upload = multer({ dest: "images/", storage: storage });

export const galleryImageUpload = upload.fields([
    { name: "backdropImage", maxCount: 2 }
]);
