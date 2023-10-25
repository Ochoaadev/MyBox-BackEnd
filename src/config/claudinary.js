const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Api_key,
  api_secret: process.env.Api_secret,
});

const UploadImage = async (dir_image) => {
  const result = await cloudinary.v2.uploader.upload(dir_image)
  return(result.secure_url)
  
};

module.exports = { UploadImage };
