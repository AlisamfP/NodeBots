'use strict';

var express = require('express');
var five = require('johnny-five');

var board = require('../lib/fiveClient');
var boardFunc = require('../lib/boardFnc');

var router = express.Router();

/* GET strobe page. */
router.get('/', function(req, res) {
    boardFunc.led.strobe();
    res.end();
});

module.exports = router;
