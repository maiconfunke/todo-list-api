'use strict';

const mongoose = require('mongoose');
const List = mongoose.model('List');
const Task = mongoose.model('Task');

// Retorna todas as listas ativas/inativas com base no atributo ACTIVE
exports.getLists = (isActive) => {
    return (req, res, next) => {
        List.find({ active: isActive })
            .then((data) => {
                res.status(200).send(data);
            }).catch((error) => {
                res.status(404).send(error);
            });
    };
};

// Retorna todas as tasks de uma lista
exports.getTasksFromList = (req, res, next) => {
    Task.find({ listId: req.params.id })
        .then((data) => {
            res.status(200).send(data);
        }).catch((error) => {
            res.status(404).send(error);
        });
};


// Retorna uma lista específica com base no ID
exports.getList = (req, res, next) => {
    List.findOne({ _id: req.params.id })
        .then((data) => {
            res.status(200).send(data);
        }).catch((error) => {
            res.status(404).send(error);
        });
};

// Remove uma lista como base no ID
exports.removeList = (req, res, next) => {
    List.findByIdAndRemove(req.params.id)
        .then((success) => {
            res.status(200).send({ message: 'Lista removida com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao remover a lista', data: error });
        });
};

// Cria uma nova lista
exports.createList = (req, res, next) => {
    const list = new List();
    list.description = req.body.description;
    list.title = req.body.title;
    list.active = req.body.active || true;
    list.save()
        .then((success) => {
            res.status(201).send({ message: 'Lista criada com sucesso!', data: success });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao cadastrar a lista', data: error });
        });
};

// Altera uma lista com base no ID
exports.updateList = (req, res, next) => {
    List.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            active: req.body.active
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Lista atualizada com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao atualizar a lista', data: error });
        });
};

// Arquiva uma lista com base no ID
exports.archiveList = (req, res, next) => {
    List.findByIdAndUpdate(req.params.id, {
        $set: {
            active: false
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Lista arquivada com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao arquivar a lista', data: error });
        });
};

//Reabre uma lista com base no ID
exports.unArchiveList = (req, res, next) => {
    List.findByIdAndUpdate(req.params.id, {
        $set: {
            active: true
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Lista reaberta com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao reabrir a lista', data: error });
        });
};

