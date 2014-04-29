// Storage

var storage = (function ($) {
'use strict';
// - - - - - - - - - -

	var
		fn = {},
	end;

	fn = {
		onstorevalues 	: 	function () {
								event.preventDefault();
								console.log('storage store values!');
							},
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {

	$('body').on('click', 'input[type=submit]', storage.onstorevalues);

});









