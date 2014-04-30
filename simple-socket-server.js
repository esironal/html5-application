// Socketserver in node.js

var net = require('net');

var socket;

socket = net.createServer( function (socket) {

	// Eventlistener auf das Socketobjekt
	socket.on('data', function (data) {
		socket.write(data);
	});

});

// Socket auf einen Port legen
socket.listen(8000, function () { 
	console.log('Socketserver runs on 8000!'); 
});