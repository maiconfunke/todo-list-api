'use strict';

// Protocolo GET
exports.getLists = (req, res, next) => {
    res.status(200).send({
        title: 'retorna todas as listas',
        version: '0.0.2'
    });
};

// Protocolo GET
exports.getList = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        ttype: 'retorna lista especifica',
        listId: id
    });
};

// Protocolo DELETE
exports.removeList = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        type: 'remove lista especifica',
        listId: id
    });
};

// Protocolo POST
exports.createList = (req, res, next) => {
    res.status(201).send({
        type: 'cria uam lista',
        item: req.body
    });
};

// Protocolo PUT
exports.updateList = (req, res, next) => {
    res.status(201).send({
        type: 'edita uma lista',
        item: req.body
    });
};

