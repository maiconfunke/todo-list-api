'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// {
//     "title": "minhas pendencias",
//     "description": "uma breve descrição",
//     "active": true
// }
const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    active: {
        type: Boolean,
        required: false,
        default: true
    }
});

module.exports = mongoose.model('List', schema);