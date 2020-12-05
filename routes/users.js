const express = require('express');
const router = express.Router();
const db = require('../src/database');
const userCollection = db.getCollection('users');
const User = require('../src/User');

router.get('/:id', showUser);
function showUser(req, res) {
    let id = parseInt(req.params.id);
    let user = userCollection.get(id);
    res.json(user);
}

router.get('/', listUsers);
function listUsers(req, res) {
    let users = userCollection.find();  // gib mir alles!
    let names = [];
    for(let user of users) {
        names.push(user.name);
    }
    res.json(names);
}

router.post('/', newUser);
function newUser(req, res) {
    /* Body:
        {
            "name": "Yungra",
            "legs": 3
        }
     */
    const user = new User(req.body.name, req.body.legs);
    userCollection.insert(user);
    res.json(user);
}

router.delete('/:id', delUser);
function delUser(req, res) {
    let id = parseInt(req.params.id);
    const user = userCollection.get(id);
    userCollection.remove(user);
    res.json(user);
}


module.exports = router;
