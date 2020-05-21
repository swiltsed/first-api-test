var express = require('express');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

app.use(express.json());

// app.use('/', indexRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', usersRouter);

module.exports = app;
