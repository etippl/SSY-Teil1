const express = require('express');
const router = express.Router();
const db = require('../src/database');
const User = require('../src/User');

router.get('/:id', showItem);
function showItem(req, res) {
    let id = parseInt(req.params.id);
    const userCollection = db.getCollection('users');
    let user = userCollection.get(id);
    res.json(user);
}

router.get('/', listItems);
function listItems(req, res) {
    const userCollection = db.getCollection('users');
    let users = userCollection.find();  // gib mir alles!
    let names = [];
    for(let user of users) {
        names.push(user.name);
    }
    res.json(names);
}

module.exports = router;
