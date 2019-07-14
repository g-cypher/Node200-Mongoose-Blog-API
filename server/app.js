const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://test:test12@ds117423.mlab.com:17423/heroku_r3fv70tz',{ useNewUrlParser: true });
mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.use('/api/users', require('./routes/users'));

app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;



