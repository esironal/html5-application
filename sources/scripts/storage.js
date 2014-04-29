// Storage

var storage = (function ($) {
'use strict';
// - - - - - - - - - -

	var
		fn   = {},
		data = null,
		
		element = '#chat [type=text]',
	end;

	fn = {
		onstorevalues 	: 	function () {
								event.preventDefault();
								console.log('storage store values!');

								data = $(element).val();
								fn.storeData();
							},
		storeData       : 	function () {
								localStorage.setItem('chatData', data);
							}
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {

	$('body').on('click', 'input[type=submit]', storage.onstorevalues);

});









