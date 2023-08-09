const express = require('express');
const path = require('path');
const router = express.Router();

let myArray = {
    guest: ['Nuts', "Legumes"],
    owner: ['Vegetables', 'Nuts', 'Fruits', "Legumes"]
};
let loginUser;
let userHasAccess;
let category;

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

router.post('/login', (req, res, next) => {
    // When User enters either guest/guest or owner/owner as username/password, 
    // show view.html
    let username = req.body.username;
    let password = req.body.password;
    if ((username == "guest" && password == "guest")
        || (username == "owner" && password == "owner")) {
        loginUser = username;
        res.sendFile(path.join(__dirname, 'view.html'));
    } else {
        // res.sendFile(path.join(__dirname, 'error.html'));
        throw new Error('Invalid username or password.');
    }
});

router.post('/post', (req, res, next) => {
    // console.log('loginUser', loginUser);
    // console.log(req.body);
    category = req.body.category;
    userHasAccess = myArray[loginUser].indexOf(category) >=0;
    next();
});

router.post('/post', (req, res, next) => {
    if (userHasAccess) {
        res.send("Welcome to " + category);
    } else {
        res.send("Unauthorized")
    }
});

module.exports = router;
