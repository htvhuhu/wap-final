const express = require('express');
const app = express();
let path = require("path");

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let router = require('./routes');
app.use('/', router);

app.listen(80, () => {
    console.log('Your Server is running on 80');
})

app.use((error, req, res, next) => {
    res.sendFile(path.join(__dirname, 'html', 'error.html'));  
});

