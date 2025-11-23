const express = require('express');
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: '../frontend' });
});

module.exports = router;