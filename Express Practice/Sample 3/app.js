const express = require('express');
const path = require('path');
const app = express();
let router = require('./routes');

let port = 80;
app.listen(80, () => {
    console.log('Your Server is running on', port);
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.use((error, req, res, next) => {
    res.sendFile(path.join(__dirname, 'error.html'));
});