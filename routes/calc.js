const express = require('express');
const router = express.Router();

router.get('/', calc);

function calc(req, res) {
    res.send('Taschenrechner');
}

/*
    POST http://....
        HTTP-Body: Daten

    GET/POST http://.....?para1=abc&para2=def

    GET/POST http://..../para1/abc
*/

router.get('/add/:zahl1/:zahl2', addieren);
function addieren(request, response) {
    let z1 = request.params.zahl1; // strings!!
    let z2 = request.params.zahl2;
    let result = parseFloat(z1) + parseFloat(z2);
    response.json(result);
}

/*
POST-Daten sind in JSON:
    {
        "zahl1": 17,
        "zahl2": 55
    }
*/

router.post('/mul', mul);
function mul(req, res) {
    let z1 = req.body.zahl1;
    let z2 = req.body.zahl2;
    let result = z1 * z2;
    res.json(result);
}

module.exports = router;
