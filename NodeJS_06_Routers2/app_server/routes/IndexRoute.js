const express = require("express");
const router = express.Router();
const controllerIndex = require('../controller/IndexController');

router.get('/', controllerIndex.index);
router.get('/login', controllerIndex.login);

module.exports = router;