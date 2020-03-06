
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const round = require('./lambda');

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const jsonParser = bodyParser.json()


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(bodyParser.json());
app.post('/',jsonParser, (req, res) => {
    res.send(round.main(req.body, req.body));
});


app.listen(PORT, HOST);


console.log(`Running on http://${HOST}:${PORT}`);