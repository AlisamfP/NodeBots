var express = require('express');
var five = require('johnny-face');

var board = require('../lib/five');
var boardFunc = require('../lib/boardFnc')

var router = express.Router();

/* GET strobe page. */
router.get('/', function(req, res) {
    boardFunc.led.strobe();
});

module.exports = router;
