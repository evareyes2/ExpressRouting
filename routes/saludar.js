const express = require('express');
const router = express.Router();

router.get('/frances', (req, res) => {
    res.send('Bonjur!');
  });
  
  router.get('/italiano', (req, res) => {
    res.send('¡Ciao!');
  });
  
  router.get('/japones', (req, res) => {
    res.send('こんにちは!!');
  });
  
  module.exports = router;

// router.get('/:idioma', (req, res) => {
//     const idioma = req.params.idioma;
//     if (idioma === 'frances') {
//         res.send('Bonjour!');
// } else if (idioma === 'japones') {
//     res.send('こんにちは!');
// } else if (idioma === 'italiano') {
//     res.send('Ciao!');
// } else {
//     res.send('Idioma no detectado!');
// }

// });

// module.exports = router;