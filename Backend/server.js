import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 101 notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ msg: "Post Send Successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ msg: "Post Updated Successfully" });
});
app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ msg: "Post Delete Successfully" });
});

app.listen(5001, () => {
  console.log("App is Running on PORT 5001");
});
