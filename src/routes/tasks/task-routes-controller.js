'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Task');

// Retorna lista de tarefas abertas
exports.getTasks = (isActive) => {
    return (req, res, next) => {
        Task.find({ active: isActive })
            .then((data) => {
                res.status(200).send(data);
            }).catch((error) => {
                res.status(404).send(error);
            });
    };
}

// Retorna tarefa com base no ID
exports.getTask = (req, res, next) => {
    Task.findOne({ _id: req.params.id })
        .then((data) => {
            res.status(200).send(data);
        }).catch((error) => {
            res.status(404).send(error);
        });
};

// Remove tarefa com base no ID
exports.removeTask = (req, res, next) => {
    Task.findByIdAndRemove(req.params.id)
        .then((success) => {
            res.status(200).send({ message: 'Tarefa removida com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao remover a tarefa', data: error });
        });
};

// Cria uma nova tarefa
exports.createTask = (req, res, next) => {
    const task = new Task();
    task.description = req.body.description;
    task.title = req.body.title;
    task.active = req.body.active || true;
    task.listId = req.body.active || '';
    task.save()
        .then((success) => {
            res.status(201).send({ message: 'Tarefa criada com sucesso!', data: success });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao cadastrar a Tarefa', data: error });
        });
};

// Atualiza propriedades de uma Tarefa
exports.updateTask = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            active: req.body.active,
            listId: req.params.listId || ''
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Tarefa atualizada com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao atualizar a Tarefa', data: error });
        });
};

// Finaliza uma tarefa em aberto
exports.doneTask = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: {
            active: false
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Tarefa concluida com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao concluir a tarefa', data: error });
        });
};

// Reabre uma tarefa finalizada
exports.unDoneTask = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: {
            active: true
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Tarefa reaberta com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao reabrir a tarefa', data: error });
        });
};

// Atribui tarefa a uma lista
exports.addTaskToList = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: {
            listId: req.params.listId
        }
    })
        .then((success) => {
            res.status(200).send({ message: `Tarefa atribuida a lista ${req.params.listId} com sucesso!` });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao atribuir tarefa a lista', data: error });
        });
};

// Atribui tarefa a uma lista
exports.removeTaskFromList = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: {
            listId: null
        }
    })
        .then((success) => {
            res.status(200).send({ message: 'Tarefa removida da lista com sucesso!' });
        }).catch((error) => {
            res.status(400).send({ message: 'Falha ao remover tarefa da lista', data: error });
        });
};

