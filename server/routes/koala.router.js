const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

// DB CONNECTION
pool = new pg.Pool({
    database: "koala",
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 4500
})

// GET
koalaRouter.get('/', (req, res) => {
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
koalaRouter.put('/', (req, res) => {
        console.log(req.params.id);
        console.log(req.body.name);
        const sqlQuery = `
        UPDATE "koala"
        
    `;
    const sqlParams = [
        req.body.name,          
        req.params.id           
    ];
    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('UPDATE err', err);
            res.sendStatus(500);
        })
})


// DELETE

module.exports = koalaRouter;