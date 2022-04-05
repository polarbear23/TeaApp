const express = require('express');
const router = express.Router();
const { getAllTea } = require('../controllers/teas');


router.get('/', getAllTea);


module.exports = router;