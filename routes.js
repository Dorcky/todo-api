// Importe les modules nécessaires
const express = require('express');
const controllers = require('./controllers');

// Crée un routeur Express
const router = express.Router();

// Définit les routes
router.get('/todos', controllers.getAllTodos);
router.post('/todos', controllers.createTodo);
router.get('/todos/:id', controllers.getTodo);
router.put('/todos/:id', controllers.updateTodo);
router.delete('/todos/:id', controllers.deleteTodo);

// Exporte le routeur
module.exports = router;