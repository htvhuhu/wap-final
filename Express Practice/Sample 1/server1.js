const express = require('express')
const path = require('path')
const handler = require('./module/handlers')

const app = express();
const port = 3002;
app.enable('case sensitive routing');

// read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', handler.showExamPage);

app.post('/post', handler.handlePost);

app.get('/preview', handler.showPreview);

// error handling
app.use(function (error, req, res, next) {
    res.sendFile(path.join(__dirname, 'error.html'));
})

app.listen(port, function() {
    console.log('Server is starting on port', port);
});