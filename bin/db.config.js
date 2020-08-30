'use strict';

const mongoose = require('mongoose');
const { url } = require('./db.conf');

exports.init = () => {
 
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Connection Error:'));

  db.once('open', () => {
    console.log("Successfully connected to MongoDB!");
  });
}
