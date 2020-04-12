const fs = require('fs');
const chalk = require('chalk');

// ADD
const addNote = (title, body) => {
    let notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// REMOVE
const removeNote = (title) => {
    let notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title != title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed!'));
    }
    else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

// LIST
const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.underline.inverse('Your Notes:'))
    notes.forEach((note, i) => {
        console.log(`${i+1}. ${note.title}: ${note.body}`);
    })
}

// READ
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) console.log(chalk.inverse(note.title) + ' : ' + note.body);
    else console.log(chalk.red.inverse('No note found!'));
    
}

// SAVE
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON);
}

// LOAD
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//EXPORT
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}