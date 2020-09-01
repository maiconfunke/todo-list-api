'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Carrega os models
const List = require('./models');

// Carrega rotas
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


app.use(routes);

module.exports = app;
