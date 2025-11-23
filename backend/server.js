const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir le frontend statique
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/', require('./routes/index'));
app.use('/tools', require('./routes/tools'));
app.use('/panels', require('./routes/panels'));
app.use('/contact', require('./routes/contact'));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
