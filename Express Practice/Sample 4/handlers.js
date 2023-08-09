const express = require('express');
const path = require('path')

let history = {};

module.exports.showIndexPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
};

module.exports.handlePost = (req, res, next) => {
    // check if number
    let number = parseInt(req.body.number);
    let typeNum = req.body.typeNum;
    if (isNaN(number)) {
        res.redirect('/');
    } else {
        if ((number % 2 == 0 && typeNum == 'Odd') || number % 2 != 0 && typeNum == 'Even') {
            throw new Error('Invalid number');
        } else {
            history[number] = typeNum;
            res.redirect('/history');
        }
    }
};

module.exports.showHistory = (req, res, next) => {
    res.send(history);
};