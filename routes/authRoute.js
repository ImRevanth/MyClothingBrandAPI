const express = require('express');
const router = express.Router();
const { createUser,loginsUserCtrl } = require('../controllers/userCtrl')

router.post('/register',createUser);
router.post('/login',loginsUserCtrl)

module.exports = router;