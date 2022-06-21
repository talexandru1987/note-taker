const { Router } = require("express");
const { getItems, getNote } = require("../controllers/notes");

const router = Router();

router.get("/", getItems);
router.get("/:notes", getNote);

module.exports = router;
