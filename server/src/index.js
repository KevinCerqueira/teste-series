require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);