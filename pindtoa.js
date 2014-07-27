var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {
	var servo = new five.Servo(process.argv[2] || 10);
	this.repl.inject({
    	servo: servo
  	});

  	var pin = new five.Pin(13);
  	pin.high();
});