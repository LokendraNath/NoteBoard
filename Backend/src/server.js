import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//* Router Middleware
if (process.env.NODE.ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouter);

if (process.env.NODE.ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontent/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App is Running on PORT ${PORT}`);
  });
});
