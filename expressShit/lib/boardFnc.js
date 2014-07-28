'use strict';

var five = require('johnny-five');

function register(){
  module.exports.led = new five.Led(13);
  module.exports.servo = new five.Servo({
  	pin: 10, type: 'continuous'
  });
}

module.exports = {
  register: register,
};