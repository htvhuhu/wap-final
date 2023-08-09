const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const adminRouter = require('./routes/adminRouter');
app.use('/admin', adminRouter);

app.listen(port, function() {
    console.log('Server is starting at port', port);
});
