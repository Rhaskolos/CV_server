const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getConnection = require("./db");
const cvRoutes = require("./routes/Cv")


getConnection();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
  }));



/**
 * Middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/**
 * Routers
 */
app.use(cvRoutes);

app.listen(3001);
