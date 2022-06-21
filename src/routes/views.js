const { Router } = require("express");
const { renderHomePage, renderNotePage } = require("../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/notes", renderNotePage);

module.exports = router;
