const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// DB CONNECTION


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