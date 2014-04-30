// Main for Worker

var worker = (function ($) {
'use strict';
// - - - - - - - - - -

	var 
		fn = {},
		worker = null,
	end;

	fn = {
		init 		: 	function () {
							// Einen dedizierten Worker erstellen
							worker = new Worker('sources/scripts/worker.js');

							// Eventlistener auf den Worker
							$(worker).on('message', fn.onmessage);

							// Worker starten
							fn.send('go');
						},
		onmessage : 	function () {
							$('#worker-messages').append(event.data);
						},
		send      : 	function (data) {
							worker.postMessage(data);
						},
		terminate : 	function () {
							worker.terminate();
						}
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {
'use strict';
// - - - - - - - - - -

	$('#start').on('click', fn.init);
	$('#stop').on( 'click', fn.terminate);

// - - - - - - - - - -	
});