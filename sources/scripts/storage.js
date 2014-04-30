// Storage

var storage = (function ($) {
'use strict';
// - - - - - - - - - -

	var
		fn   = {},
		
		element = '#chat [type=text]',
	end;

	fn = {
		key   			: null,
		value 			: null,

		onstorevalues 	: 	function () {
								event.preventDefault();
								console.log('storage store values!');

								fn.value = $(element).val();
								fn.key   =    $(element).attr('name')
										   || $(element).attr('id');

								fn.storeRecord();

							},
		storeRecord     : 	function () {
								localStorage.setItem(fn.key, fn.value);
							},
		getRecord       : 	function () {
								return localStorage.getItem(fn.key);
							},
		removeRecord    : 	function () {
								localStorage.removeItem(fn.key);
							},
		ajaxLoad        : 	function () {

								$.ajax({
									url : url,
									success : function (response) {
										 $(response).each(function (index, item) {
										 	return item;
										 });
									}
								});
							}
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {

	$('body').on('click', 'input[type=submit]', storage.onstorevalues);

});









