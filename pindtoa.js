var five = require("johnny-five"), board, servo;
var board = new five.Board();


board.on("ready", function() {
    servo = new five.Servo({
        pin: 10,
        type: 'continuous'
    });
	board.repl.inject({
    	servo: servo
  	});
    servo.cw(0.5);
});
