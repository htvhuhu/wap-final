const express = require('express');
var ejs = require("ejs");
const mysql = require('mysql');
var orderRouter = require('./orderRouter');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use("/order",orderRouter);

app.get('/',(req, res, next) =>{
    res.redirect('/order');
});

app.use( express.static( "public" ) );
// // Connect to MySQL
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'your_password',
//     database: 'vietnamese_restaurant'
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to the database.');
// });

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})
