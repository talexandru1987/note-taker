const { Router } = require("express");

const items = require("./notes");

const router = Router();

router.use("/notes", items);

module.exports = router;
