const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// ADD
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.addNote(argv.title, argv.body) }
});

// REMOVE
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title) }
});

// LIST
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() { notes.listNotes() }
});

// READ
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.readNote(argv.title) }
});

yargs.parse();