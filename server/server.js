const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 9004;
const db = require('../database/index.js');
const routes = require('./router.js');

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', routes);

// app.get(db);

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => {
  console.log('FooterPlayer listening on PORT ', PORT)
});