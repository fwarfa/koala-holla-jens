const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require('pg');
pool = new pg.Pool({
    database: "koala",
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 4500
})

// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;