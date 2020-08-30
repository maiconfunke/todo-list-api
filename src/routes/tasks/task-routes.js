'use strict';

const express = require('express');
const router = express.Router();

// Carrega o controller
const controller = require('./task-routes-controller');

// Retorna todas as Tarefas concluidas
router.get('/api/v1/tasks/done', controller.getTasks(false));

// Retorna todas as Tarefas não concluidas
router.get('/api/v1/tasks', controller.getTasks(true));

// Retorna tarefa específica com base no ID
router.get('/api/v1/tasks/:id', controller.getTask);

// Remove tarefa específica com base no ID
router.delete('/api/v1/tasks/:id', controller.removeTask);

// Cria uma nova tarefa
router.post('/api/v1/tasks', controller.createTask);

// Edita uma tarefa específica com base no ID
router.put('/api/v1/tasks/:id', controller.updateTask);

// Finaliza uma tarefa com base no ID
router.put('/api/v1/tasks/:id/done', controller.doneTask);

// Reabre uma tareafa finalizada com base no ID
router.put('/api/v1/tasks/done/:id', controller.unDoneTask);

// Atribui uma tarefa a uma lista com base nos IDS
router.put('/api/v1/tasks/:id/list/:listId', controller.addTaskToList);

// Remove atribuição da lista na tarefa
router.put('/api/v1/tasks/:id/list', controller.removeTaskFromList);

module.exports = router;