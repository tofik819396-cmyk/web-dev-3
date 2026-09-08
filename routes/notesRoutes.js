const express = require('express');
const { getNotes,createNotes,getNotesById,updateNotes,deleteNotes} = require('../controllers/notescontroller');
const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNotesById);
router.post("/notes", createNotes);
router.put("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);


module.exports = router;