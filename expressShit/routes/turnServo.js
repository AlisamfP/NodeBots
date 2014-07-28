var express = require('express');
var five = require('johnny-five');

var board = require('../lib/fiveClient');
var boardFunc = require('../lib/boardFnc');

var router = express.Router();

/* GET strobe page. */
router.get('/', function(req, res) {
    boardFunc.servo.cw(0.5);
    boardFunc.servo.ccw(0.5);
    res.end();
});

module.exports = router;
