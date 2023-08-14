const express = require('express');
const path = require('path');
const ejs = require('ejs');
const cookieparser = require('cookie-parser');

const port = 3000;
const app = express();


const session = require('express-session');
app.use(session({
    secret: 'your_secret_key',  // This should be a long random string
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }  // Set to true if using HTTPS
}));

// setup body parser
app.use(express.json());
app.use(express.urlencoded({extended: true})); // need true for parsing JSON
// app.use(cookieparser());
app.use(cookieparser('keyforencription'));

// setup template engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// setup static
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

// setup route
app.get('/', (req, res, next) => {
    res.redirect('/index');
});
const homeRouter = require('./routes/homeRouter');
app.use('/index', homeRouter);

const menuRouter = require('./routes/menuRouter');
app.use('/menu', menuRouter);

const orderRouter = require('./routes/orderRouter');
app.use('/order', orderRouter);

const reservationRouter = require('./routes/reservationRouter');
app.use('/reservation', reservationRouter);

app.listen(port, function() {
    console.log('Server is starting at', port);
});

app.use((err, req, res, next) => {
    res.render('error', {errorMsg: err.message});
});