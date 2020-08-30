'use strict';

const express = require('express');
const { Router } = require('express');
const router = express.Router();

// Retorna todas as listas
router.get('/api/v1/lists', (req, res, next) => {
    res.status(200).send({
        title: 'retorna todas as listas',
        version: '0.0.2'
    });
});

// Retorna lista específica com base no ID
router.get('/api/v1/lists/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        ttype: 'retorna lista especifica',
        listId: id
    });
});

// Remove lista específica com base no ID
router.delete('/api/v1/lists/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        type: 'remove lista especifica',
        listId: id
    });
});

// Cria uma nova lista
router.post('/api/v1/lists', (req, res, next) => {
    res.status(201).send({
        type: 'cria uam lista',
        item: req.body
    });
});

// Edita uma lista específica com base no ID
const updateListRoute = router.put('/api/v1/lists/:id', (req, res, next) => {
    res.status(201).send({
        type: 'edita uma lista',
        item: req.body
    });
});

module.exports = router;


//200 ok
//201 created
//400 bad request
//404 not found
//401 nao autenticado
// 403 acesso negado
// 500 internal server error