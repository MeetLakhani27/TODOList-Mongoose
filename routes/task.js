var express = require('express');
var router = express.Router();
var task = require('../controller/taskcontroller');

/* GET users listing. */
router.post('/',task.inserttask) 
router.post('/alltask',task.gettask) 
router.post('/onetask',task.getonetask) 
 

module.exports = router;