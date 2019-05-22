const express = require('express');
const usersControllers = require('../controllers/users');
const router = express.Router();


router.get('/', usersControllers.getUser);
router.get('/:id', usersControllers.getById);
router.post('/register', usersControllers.postNewUser);

module.exports = router