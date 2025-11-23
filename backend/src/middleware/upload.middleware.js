import multer from "multer";
//muletr is a middleware for handling form data for file uploads primarely
const storage = multer.memoryStorage();
const fileFilter =(req,file,cb)=>{
    if (file.mimetype.startsWith("image/")){
        cb(null,true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5*1024*1024}, //basically 5MB as limit
});

export default upload;
