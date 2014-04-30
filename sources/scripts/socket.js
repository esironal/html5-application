// Sockets
var socket = (function ($) {
'use strict';
// - - - - - - - - - -

	var 
		fn     = {}, 
		socket = null,

		host   = 'ws://localhost/app.js',

	end;

	fn = {
		init 		: 	function () {
							socket = new WebSocket(host);
						},
		send 		: 	function () {
							socket.send({"key" : "hallo Welt"});
						},
		onmessage 	: 	function () {
							console.log('Nachricht vom Server: ' + event.data);
						},
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {
'use strict';
// - - - - - - - - - -

	socket.init();
	$(socket).on('message', socket.onmessage)

// - - - - - - - - - -
});