const express = require("express");
const cors = require("cors");

const apiRoute = require("./routes/api");
const viewRoute = require("./routes/views");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../public"));
app.use("/", viewRoute);
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Note taker app listening on http://localhost:${PORT}`);
});
