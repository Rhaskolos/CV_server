const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getConnection = require("./db");



getConnection();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));



/**
 * Middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/**
 * Routers
 */

app.listen(3001);
