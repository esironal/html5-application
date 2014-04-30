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
							var object = JSON.parse(event.data);
							
							if (object.console)
								console.log(object.console);
							if (object.dom)
								$('#worker-messages').append(object.dom);
						},
		send      : 	function (data) {
							worker.postMessage( data );
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

	$('#start').on('click', worker.init);
	$('#stop').on( 'click', worker.terminate);

// - - - - - - - - - -	
});