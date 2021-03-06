import cloudinary from "cloudinary";

import User from "../models/user";
import ErrorHandler from "../utils/errorHandler";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export const register = async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "bookit/avatars",
    width: "150",
    crop: "scale",
  });
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: result.public_id, url: result.secure_url },
  });

  res.status(201).json({
    success: true,
    message: "Account Registered successfully",
  });
};
