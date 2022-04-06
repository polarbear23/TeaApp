const express = require('express');
const router = express.Router();
const { getAllTea, init } = require('../controllers/teas');


router.get('/', getAllTea);
router.post('/init', init);


module.exports = router;