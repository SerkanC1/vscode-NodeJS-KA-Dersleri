const express = require('express');
const router = express.Router();
const ctrlBilgisayar = require('../controller/BilgisayarController');
router.get('/', ctrlBilgisayar.index);
module.exports = router;