const {notes} = require('../models/data');
const getNotes = (req, res) => {
    res.status(200).send("Get Notes");

}

const createNotes = (req, res) => {
    let{id, title, description, note, link, createdOn, author} = req.body;

    let newData = {
        id: id,
        title: title,
        description: description,
        note: note,
        link: link,
        createdOn: createdOn,
        author: author
    }




    notes.push(newData);
    res.status(201).send("Notes added Successfully");
}

module.exports = {
    getNotes,createNotes
}