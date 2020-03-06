
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const round = require('./lambda');

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.static('wwwroot'));
app.use(bodyParser.json());
app.post('/', (req, res) => {
  round.main(req.body,req.body);
});


app.listen(PORT, HOST);


console.log(`Running on http://${HOST}:${PORT}`);