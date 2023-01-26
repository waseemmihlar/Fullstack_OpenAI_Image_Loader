import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  image: { type: String, required: true },
});

const post = mongoose.model("post", schema);

export default post;
