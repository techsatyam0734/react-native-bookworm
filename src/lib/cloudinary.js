import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary configured");
console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API key exists:", !!process.env.CLOUDINARY_API_KEY);
console.log("API secret exists:", !!process.env.CLOUDINARY_API_SECRET);

cloudinary.api
  .ping()
  .then((result) => {
    console.log("CLOUDINARY PING:", result);
  })
  .catch((error) => {
    console.log("CLOUDINARY PING ERROR:", error.message);
    console.log("STATUS:", error.http_code);
  });

export default cloudinary;
