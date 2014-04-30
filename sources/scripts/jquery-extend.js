
// Ein eigenes globales Objekt
// das alle Module beinhaltet

if (!fisQuery)
	var fisQuery = {};

$.extend( fisQuery, (function ($) {
'use strict';
// - - - - - - - - - -

	var fn = {}, 
		object = {}
		storage = fisQuery.storage,
	end;

	storage.getRecord()

	fn = {
		sayHello : function () { console.log('hello!'); }
	};

	object.worker = fn;

	return object;

// - - - - - - - - - -

})($));

$(document).ready(function ($) {
'use strict';
// - - - - - - - - - -

	fisQuery.worker.sayHello();

// - - - - - - - - - -

});