// Worker
'use strict';

// Geht nicht;
// importScripts('../../libraries/jquery/jquery-2.1.0.min.js');

var
	fn   = {},
	data = null,

	index    = 0,

	words    = [ 'Hund', 'Katze', 'Maus'],
end;

fn = {
	pickAWord 	: 	function () {
						index = Math.floor(Math.random()*words.length);
						data  = words[index];
						fn.send(data + ' ');
					},

	send        : 	function (data) {
						self.postMessage({'dom : ' + '"' + data + '"' });
					},
	log 		: 	function (message) {
						self.postMessage({'console : ' + '"' + message + '"' });
					}
};

// Eventlistener
self.addEventListener('message', function () { fn.log(event.data); }, false);

setInterval(fn.pickAWord, Math.random()*500);




