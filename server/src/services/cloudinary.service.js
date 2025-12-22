const {cloudinaryConfig}  = require("../config/config");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: cloudinaryConfig.cloud_name,
      api_key: cloudinaryConfig.api_key,
      api_secret: cloudinaryConfig.api_secret,
    });
  }

  uploadFile = async ({ file, dir = "" }) => {
    try {
      console.log("📂 Uploading file:", file); // should be file path

      const uploadResult = await cloudinary.uploader.upload(file, {
        unique_filename: true,
        folder: "blood/" + dir, // folder inside Cloudinary
      });

      // delete local file after upload
      fs.unlinkSync(file);

      return {
        url: uploadResult.secure_url,
        optimizedUrl: cloudinary.url(uploadResult.public_id, {
          quality: "auto",
          fetch_format: "auto",
        }),
      };
    } catch (exception) {
      console.error("Cloudinary Upload Error:", exception);
      throw {
        code: 422,
        message: "File upload error...",
        status: "FILE_UPLOAD_ERROR",
      };
    }
  };
}

const cloudinarySvc = new CloudinaryService();
module.exports = cloudinarySvc;
