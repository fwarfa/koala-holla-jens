const express = require('express');
const router = express.Router();
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
router.get('/', (req, res) => {

    let sqlQuery = `
        SELECT * FROM "koala"
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        console.log(dbRes.rows);
        res.send(dbRes.rows);
    }).catch((err) => {
        console.log('SQL failed', err)
        res.sendStatus(500);
    })
});

// POST
router.post('/', (req, res) => {
    let inputDetails = req.body;
    console.log("these are the input details", inputDetails);
    let sqlQuery = `INSERT INTO "koala"
    ("name", "age", "gender", "ready_for_transfer", "notes") 
     VALUES ('${req.body.name}', '${req.body.age}', '${req.body.gender}', '${req.body.readyForTransfer}', '${req.body.notes}');`
     pool.query(sqlQuery)
     .then((result) => {
        res.sendStatus(201);
     })
     .catch((err) => {
         console.log("we caught an error", err)
         res.sendStatus(500);
     })
  
  });

// PUT

router.put('/:id', (req,res) => {
    let sqlQuery = `
        UPDATE "koala" 
        SET "ready_for_transfer" = $1
        WHERE "ready_for_transfer" = $2
    `;
    let sqlParams = [
        true,
        req.body.id
    ];
    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('PUT err', err);
            res.sendStatus(500);
        })
})

// DELETE

module.exports = router;