require("dotenv").config();

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

const smtpConfig = {
  provider: process.env.SMTP_PROVIDER, // e.g. gmail
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // <-- fix here
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  from: process.env.SMTP_FROM,
};

const dbConfig = {
  mongodbUrl: process.env.MONGODB_URL,
  mongodbName: process.env.MONGODB_NAME,
};

const AppConfig={
  frontendUrl:process.env.FRONTEND_URL || "http://localhost:5173/",
  jwtSecret: process.env.JWT_SECRET
}
module.exports = { cloudinaryConfig, smtpConfig, dbConfig, AppConfig };
