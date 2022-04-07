const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createOrder, updateOrder } = require('../controllers/order');

router.post('/', passport.authenticate('jwt', { session: false }), createOrder);

router.put('/', passport.authenticate('jwt', { session: false }), updateOrder);

module.exports = router;