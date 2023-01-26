import mongoose from "mongoose";

const Connection = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected succesfully"))
    .catch((err) => console.log(err));
};

export default Connection;
