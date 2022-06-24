const express = require("express");
const path = require("path");

const apiRoute = require("./routes/api");
const viewRoute = require("./routes/views");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", viewRoute);
app.use("/api", apiRoute);
//
app.listen(PORT, () => {
  console.log(`Note taker app listening on http://localhost:${PORT}`);
});
