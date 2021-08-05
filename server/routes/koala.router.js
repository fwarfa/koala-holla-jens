const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pg = require('pg')

// DB CONNECTION
pool = new pg.Pool({
    database: "koala",
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 4500
})

// GET


// POST
router.post('/', (req, res) => {
  let inputDetails = req.body;
  console.log(inputDetails);
  let sqlQuery = `INSERT INTO "koala"
  ("name", "age", "gender", "ready-for-transfer", "notes") 
   VALUES ('${req.body.name}', '${req.body.age}', '${req.body.gender}', ${req.body.readyForTransfer}, ${req.body.notes})`
   pool.query(sqlQuery)
   .then((res) => {

   })
   .catch((err) => {
       console.log("we caught an error", err)
       res.sendStatus(500);
   })

});

module.exports = router;