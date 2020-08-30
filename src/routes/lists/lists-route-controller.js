'use strict';

const mongoose = require('mongoose');
const List = mongoose.model('List');

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
    const list = new List();
    list.description = req.body.description;
    list.title = req.body.title;
    list.active = req.body.active;
    list.save()
        .then((success) => {
            res.status(201).send({ message: 'Lista criada com sucesso!', data: success });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao cadastrar a lista', data: error });
        });
};

// Protocolo PUT
exports.updateList = (req, res, next) => {
    res.status(201).send({
        type: 'edita uma lista',
        item: req.body
    });
};

