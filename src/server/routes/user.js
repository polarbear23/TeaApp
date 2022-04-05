const express = require('express');

const { isLoggedIn } = require('../utils/auth.js');

const {
    authenticateUser,
    createUser,
    getUserById,
} = require('../controllers/user');

const router = express.Router();

router.get('/:id', isLoggedIn, getUserById)

router.post('/login', authenticateUser);

router.post('/register', createUser);

module.exports = router;