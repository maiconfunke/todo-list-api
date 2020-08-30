'use strict';

const homeRoute = require('./home-route');
const listsRoutes = require('./lists/lists-routes');
const tasksRoutes = require('./tasks/task-routes');


module.exports = [ homeRoute, listsRoutes, tasksRoutes ];