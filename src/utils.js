const fs = require("fs");
const path = require("path");

const readFromFile = () => {
  try {
    const filePath = path.join(__dirname, `../db/db.json`);

    const data = fs.readFileSync(filePath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    console.log(`[ERROR: ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to read!",
    });
  }
};

const writeToFile = (data) => {
  try {
    const filePath = path.join(__dirname, `../db/db.json`);

    return fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(`[ERROR: ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to write!",
    });
  }
};

// export task here
module.exports = {
  writeToFile,
  readFromFile,
};
