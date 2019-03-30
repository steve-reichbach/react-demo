const express = require('express');
const router = express.Router();

const fs = require('fs');
const stub = fs.readFileSync('stubs/data.json', 'utf8');

/* GET users listing. */
router.get('/', (req, res, next) => {
  // Dirty code ;), for presentation purposes only
  res.json(JSON.parse(stub));
});

module.exports = router;
