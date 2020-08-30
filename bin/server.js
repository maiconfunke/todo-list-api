'use strict';

const app = require('../src/app');
const http = require('http');
const mongoDB = require('./db.config');

// Inicializa o banco
mongoDB.init();

const port = parseInt(process.argv.slice(2)) || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log(`Api rodando na porta ${port}`);
