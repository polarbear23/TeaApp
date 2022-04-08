const jwt = require('jsonwebtoken');

const { SECRET } = require('../config.js');

const createToken = (payload) => jwt.sign(payload, SECRET);

module.exports = {
    createToken,
};
