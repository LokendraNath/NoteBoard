import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

//* Router Middleware
app.use("/api/notes", notesRouter);

app.listen(5001, () => {
  console.log("App is Running on PORT 5001");
});
