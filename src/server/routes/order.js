const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createOrder } = require('../controllers/order')

router.post('/', passport.authenticate('jwt', { session: false }), createOrder);