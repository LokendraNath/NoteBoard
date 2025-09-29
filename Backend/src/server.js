import express from "express";
import notesRouter from "./routes/notesRoutes.js";

const app = express();

//* Router Middleware
app.use("/api/notes", notesRouter);

app.listen(5001, () => {
  console.log("App is Running on PORT 5001");
});
