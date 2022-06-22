const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, "images")
    },
    filename:(req: any, file: any, cb: any) => {
        cb(null, Date.now()+path.extname(file.originalname))
    }
})

const uploadToFilesystem = multer({storage: storage})

const imageUploadMiddleware = {
    uploadToFilesystem
}

export default imageUploadMiddleware;
