import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("You got 10 notes");
});

app.listen(5001, () => {
  console.log("App is Running on PORT 5001");
});
