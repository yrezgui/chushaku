var router  = require('express').Router();
var taskApi = require('./task');
var config  = require('../config');

router.use('/tasks', taskApi);

module.exports = router;