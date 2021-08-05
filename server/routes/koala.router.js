const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

// DB CONNECTION


// GET
router.get('/', (res, res) => {
    let sqlQuery = `
        SELECT * FROM "koala"
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        console.log(dbRes.rows);
        res.send(dbRes.rows)
    }).catch((err) => {
        console.log('SQL failed', err)
        res.sendStatus(500);
    })
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;