// Importe les modules nécessaires
const app = require('./app');
const dotenv = require('dotenv');

// Charge les variables d'environnement
dotenv.config();

// Définit le port
const port = process.env.PORT || 3000;

// Démarre le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});