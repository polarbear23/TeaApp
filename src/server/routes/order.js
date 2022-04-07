const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createOrder, updateOrder, upsertOrderProducts, getAllOrders } = require('../controllers/order');


router.get('/', passport.authenticate('jwt', { session: false }), getAllOrders);
router.post('/', passport.authenticate('jwt', { session: false }), createOrder);
router.put('/', passport.authenticate('jwt', { session: false }), updateOrder);
router.post('/product', upsertOrderProducts);//for single order

module.exports = router;