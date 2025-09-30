import Note from "../models/note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //* newest first (desc)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note Not Found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById Controller");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const saveNote = await note.save();
    res.status(201).json(saveNote);
  } catch (error) {
    console.error("Error in createNote Controller");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note Not Found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in UpdateNote Controller");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note Not Found" });
    res
      .status(200)
      .json({ msg: "Post Deleted Successfully", data: deleteNote });
  } catch (error) {
    console.error("Error in DeleteNote Controller");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
