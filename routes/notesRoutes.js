const express = require('express');
const { getNotes } = require('../controllers/notescontroller');
const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", createNotes);


module.exports = router;