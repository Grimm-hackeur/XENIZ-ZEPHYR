const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Obtenir la liste des panels
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/panels.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Impossible de lire les panels' });
    res.json(JSON.parse(data));
  });
});

// Acheter un panel
router.post('/buy', (req, res) => {
  const { panelName, quantity, userContact } = req.body;
  if (!panelName || !quantity || !userContact) {
    return res.status(400).json({ error: 'Informations manquantes' });
  }

  console.log(`Commande panel reçue: ${panelName} x${quantity} de ${userContact}`);
  res.json({ message: `Commande pour ${panelName} reçue !` });
});

module.exports = router;