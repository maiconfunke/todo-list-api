'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    },
    listId: {
        type: String,
        required: false
    },
    tags:[{
        type: String,
        required: false
    }]
},{ versionKey: false });

module.exports = mongoose.model('Task', schema);