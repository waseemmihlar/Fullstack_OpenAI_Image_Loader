import express from "express";
import cors from "cors";
import mongoDb from "./mongodb/connection.js";
import dotenv from "dotenv";
import postRoutes from "./Routes/postroutes.js";
import dalleRoutes from "./Routes/dalleRoutes.js";

const app = express();

// Configuration

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
dotenv.config(); //must not configure dotenv path

app.get("/", async (req, res) => {
  res.send("Hello Friends");
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const startServer = async () => {
  try {
    mongoDb(process.env.CONNECTION_URL);
    app.listen(5000, () =>
      console.log("server Running at http://localhost:5000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
