const { v4: generateUniqueId } = require("uuid");

const { readFromFile, writeToFile } = require("../utils");

const getNotes = (req, res) => {
  console.log("getNotes2");

  //read from file
  const notes = readFromFile();
  //return response
  return res.json(notes);
};

const deleteNote = (req, res) => {
  console.log("deleteNote");
  //get note id
  const { id } = req.params;
  //get all notes from file
  const notesData = readFromFile();
  //remove note from notes
  const filteredNotes = notesData.filter((note) => note.id !== id);
  //writ to file
  writeToFile(filteredNotes);
  //return
  return res.json(notesData);
};

const createNote = (req, res) => {
  console.log("createNote");
  // res.json("create");
  const { title, text } = req.body;

  //uuid
  const id = generateUniqueId();

  //payload
  const note = {
    id,
    title,
    text,
  };

  //get notes
  let notesData = readFromFile();

  //push to array
  notesData.push(note);

  //write to file
  writeToFile(notesData);

  return res.json(notesData);
};

module.exports = { getNotes, deleteNote, createNote };
