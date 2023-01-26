import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/model.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all posts

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//create a post

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, image } = req.body;

    console.log(name);

    console.log(prompt);
    const imageUrl = await cloudinary.uploader.upload(image);
    console.log(imageUrl.url);
    const newPost = await Post.create({
      name,
      prompt,
      image: imageUrl.url,
    });
    console.log(newPost);
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});
export default router;
