const express = require('express');
const passport = require('passport');

const {
    authenticateUser,
    createUser,
    getUserFromJWT,
} = require('../controllers/user');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getUserFromJWT)

router.post('/login', authenticateUser);

router.post('/register', createUser);

module.exports = router;