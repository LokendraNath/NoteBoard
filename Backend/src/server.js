import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
connectDB();

//* Router Middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
