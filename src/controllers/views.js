const path = require("path");

const renderHomePage = (req, res) => {
  console.log("renderHomePage");
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile(filePath);
};

const renderNotePage = (req, res) => {
  console.log("renderNotePage");
  const filePath = path.join(__dirname, "../../public/notes.html");
  //send file
  return res.sendFile(filePath);
};

module.exports = { renderHomePage, renderNotePage };
