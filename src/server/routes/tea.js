const express = require('express');
const router = express.Router();
const { getAllTea, init } = require('../controllers/tea');


router.get('/', getAllTea);
router.post('/init', init);


module.exports = router;