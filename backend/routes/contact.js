const express = require('express');
const router = express.Router();

// Page contact
router.get('/', (req, res) => {
  res.sendFile('contact.html', { root: '../frontend' });
});

// Formulaire contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Informations manquantes' });
  }

  console.log(`Message reçu de ${name} (${email}): ${message}`);
  res.json({ message: 'Votre message a été envoyé avec succès !' });
});

module.exports = router;