const multer = require("multer")
const fs = require("fs")
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = "./public"
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true })
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        let filename = Date.now() + "-" + file.originalname
        cb(null, filename)

    }
})

const uploader = (type = 'image') => {
    let allowedExits = ["jpg", "jpeg", "png", "gif"];
    let size = 1024 * 1024 * 5; // 2MB
    if (type === "doc") {
        size = 1024 * 1024 * 5; // 5MB
        allowedExits.push("pdf", "docx", "txt");
    } else if (type === "audio") {
        size = 1024 * 1024 * 10; // 10MB
        allowedExits.push("mp3", "wav", "ogg");
    } else if (type === "video") {
        size = 1024 * 1024 * 50; // 50MB
        allowedExits.push("mp4", "mov", "wmv", "avi", "mkv");
    }

    const fileFilter = (req, file, cb) => {
        const fileExt = file.originalname.split(".").pop();
        if (allowedExits.includes(fileExt.toLowerCase())) {
            cb(null, true);
        } else {
            cb({
                code: 422,
                message: `${type} file type not supported`,
            });
        }
    }
    return multer({
        storage: myStorage,
        fileFilter: fileFilter,
        limits: {fileSize:size}
    })
}

module.exports = uploader;