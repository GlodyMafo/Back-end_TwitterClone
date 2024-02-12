const multer = require('multer');

//Ma collection des MIMES

const MIME_TYPES = {
    "image/gif": ".gif",
    "image/x-icon": ".ico",
    "image/jpeg": ".jpeg",
    "image/png": ".png",
    "image/jpg": ".jpg",
}

//La destination 

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './les_images')
    },

    filename: (req, file, callback) => {

        const name = file.originalname.split(' ').join('_');
        const extention = MIME_TYPES[file.mimetype];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

        callback(null, name + '-' + uniqueSuffix+extention);
    }
})

const upload = multer({ storage: storage })

module.exports=upload;