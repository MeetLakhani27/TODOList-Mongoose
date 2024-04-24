var express = require('express');
var router = express.Router();
var staff = require('../controller/staffcontroller');

/* GET users listing. */
router.post('/',staff.insertstaff) 
router.post('/login',staff.login) 
router.get('/view_staff',staff.getstaff) 
router.get('/:id',staff.getonestaff) 
router.put('/update_user/:id',staff.updatestaff) 
router.delete('/delete_user/:id',staff.deletestaff) 

module.exports = router;
