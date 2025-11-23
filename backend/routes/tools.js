const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Obtenir la liste des tools
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/tools.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Impossible de lire les tools' });
    res.json(JSON.parse(data));
  });
});

// Acheter un tool (envoi de commande)
router.post('/buy', (req, res) => {
  const { toolName, userContact } = req.body;
  if (!toolName || !userContact) {
    return res.status(400).json({ error: 'Informations manquantes' });
  }

  // Ici tu peux intégrer ton système d'envoi DM / notification
  console.log(`Commande reçue: ${toolName} de ${userContact}`);

  res.json({ message: `Commande pour ${toolName} reçue !` });
});

module.exports = router;