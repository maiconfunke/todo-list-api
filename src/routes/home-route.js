'use strict';

const express = require('express');
const router = express.Router();

router.get(['/', '/api', '/api/v1'], (req, res, next) => {
    res.status(200).send('<h1>OLAAA</h1>');
});

module.exports = router;