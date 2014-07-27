'use strict';

var five = require('johnny-five');
var led;

function register(){
  led = new five.Led(13);
}

module.exports = {
  register: register,
  led: led
};