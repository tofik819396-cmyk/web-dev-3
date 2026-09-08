const {notes} = require('../models/data');
const getNotes = (req, res) => {
    res.status(200).send("Get Notes");

}

const getNotesById = (req, res) => {
    let {id} = req.params;
    let element = notes.find(note=> note.id === Number(id))
    if(element){
        return res.status(404).send("Data Not Found")
    }

    res.status(200).send(element)


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

const updateNotes = (req, res) => {
    let {id} = req.params;

    const note = notes.find(note => note.id === Number(id))

    if(!note){
        return res.status(404).send("Data Not Found")
    }

    object.assign(note, req.body);
    res.status(200).send("Notes Updated ");
}

const deleteNotes = (req,res) => {
    let {id} = req.params;
    const note = notes.find(note => note.id === Number(id))

    if(!note){
        return res.status(404).send("Data Not Found")
    }

    let index = notes.indexOf(note)
    notes.splice(index, 1)

    res.status(200).send("Notes Deleted Successfully");
}

module.exports = {
    getNotes,getNotesById,createNotes,updateNotes,deleteNotes
}