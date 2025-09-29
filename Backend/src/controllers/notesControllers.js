export const getAllNotes = async (req, res) => {
  res.status(200).send("You got 101 notes Yess");
};

export const createNote = async (req, res) => {
  res.status(201).json({ msg: "Post Send Successfully" });
};

export const updateNote = async (req, res) => {
  res.status(200).json({ msg: "Post Updated Successfully" });
};

export const deleteNote = async (req, res) => {
  res.status(200).json({ msg: "Post Delete Successfully" });
};
