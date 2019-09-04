const express = require('express');
const app = express();
const port = process.env.port || 3232;

const cors = require('cors');
const path = require('path');

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

module.exports = app;
module.exports.port = port;