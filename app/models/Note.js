const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    color: {
        type: String
    }
});

module.exports = mongoose.model('Note', noteSchema)