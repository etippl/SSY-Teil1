const express = require('express');
const router = express.Router();

router.get('/', hello);

// let funktions_referenz = hello;
// let result = hello(123,456);

function hello(req, res) {
  res.send('NodeJS + Express läuft ausgezeichnet!');
}

router.get('/noch', nochwas);

function nochwas(request, response) {
  response.send('noch was?');
}

module.exports = router;
