// Storage

var storage = (function ($) {
'use strict';
// - - - - - - - - - -

	var
		fn = {},
	end;

	fn = {
		onstorevalues 	: 	function () {
								
							},
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {

	$('form').on('submit', storage.onstorevalues);

});