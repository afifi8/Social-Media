import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectToDb } from "./config/connect";
import authRoutes from "./routes/authRoutes.routes";
import userRoutes from "./routes/userRoutes.routes";
import postRoutes from "./routes/postRoutes.routes";
import commentRoutes from "./routes/commentRoutes.routes";

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/assets/userAvatars",
  express.static(__dirname + "/assets/userAvatars")
);
app.use("/assets/ImagePosts", express.static(__dirname + "/assets/ImagePosts"));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT + "  ❤ 👍");
  connectToDb();
});
