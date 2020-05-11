const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controller/LoginController');
router.get('/', ctrlLogin.indexGet);
router.post('/', ctrlLogin.indexPost);
module.exports = router;