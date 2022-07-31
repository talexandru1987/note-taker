const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile("filePath");
};

const renderNotePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");
  //send file
  return res.sendFile(filePath);
};

module.exports = { renderHomePage, renderNotePage };
