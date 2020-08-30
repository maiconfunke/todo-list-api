'use strict';

const express = require('express');
const router = express.Router();

// Carrega o controller
const controller = require('./lists-route-controller');

// Retorna todas as listas
router.get('/api/v1/lists', controller.getLists);

// Retorna lista específica com base no ID
router.get('/api/v1/lists/:id', controller.getList);

// Remove lista específica com base no ID
router.delete('/api/v1/lists/:id', controller.removeList);

// Cria uma nova lista
router.post('/api/v1/lists', controller.createList);

// Edita uma lista específica com base no ID
router.put('/api/v1/lists/:id', controller.updateList);

module.exports = router;


//200 ok
//201 created
//400 bad request
//404 not found
//401 nao autenticado
// 403 acesso negado
// 500 internal server error