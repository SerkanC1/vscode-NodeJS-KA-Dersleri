const express = require('express');
const router = express.Router();
const ctrlHome = require('../controller/HomeController');
router.get('/', ctrlHome.index);
module.exports = router;