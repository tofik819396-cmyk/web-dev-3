const express = require('express');
const { getNotes,createNotes,getNotesById,updateNotes,deleteNotes} = require('../controllers/notescontroller');
const { isAuthoeized,isloggedIn } = require('../middlewares/isAuthorized');
const router = express.Router();

router.get("/notes",isAuthoeized,isloggedIn, getNotes);
router.get("/notes/:id",isAuthoeized, isloggedIn, getNotesById);
router.post("/notes", createNotes);
router.put("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);


module.exports = router;