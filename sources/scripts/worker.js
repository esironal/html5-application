// Worker
'use strict';

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
						fn.send(data);
					},

	send        : 	function (data) {
						self.postMessage(data);
					}
};

setTimeout(fn.pickAWord, Math.random()*5000);