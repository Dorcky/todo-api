// Importe les modules nécessaires
const express = require('express');
const routes = require('./routes');

// Crée l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Utilise les routes définies
app.use('/api', routes);

// Exporte l'application
module.exports = app;