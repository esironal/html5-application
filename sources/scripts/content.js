// Content Module

var content = (function ($) {
'use strict';
// - - - - - - - - - -

	// 1: Initialisierung
	var
		url	     = null,
		element  = null,
		response = null,
		dataType = null,

		fn   = {},
		data = null,

		attributeList = {'A' : 'href', 'FORM' : 'action'},
	end;

	// 2: Methoden, funktionale Objekte
	// Objekt in JSON Schreibweise
	fn = {
		init    		: 	function () {
								console.log('content init!');

								// Ajax Initialisierung
								$.ajaxSetup({
									type     : 'get',
									dataType : 'html',
									async    : true,
									cache    : false,
									timeout  : 10000,

									statusCode : {
										'200' : function () { console.log('200!'); },
										'404' : function () { console.log('404!'); }
									},

									beforeSend : function () { console.log('ajax before!'); },
									complete   : function () { console.log('ajax complete!'); },
								});
							},

		showHtmlContent : 	function (context, response) {
								$(context).html(response);
							},

		onloadhtml  	: 	function () {
								var request = $.ajax({ url : url, context : context });
								
								request.done( function (response) {
									fn.showHtmlContent(this, response);
								} );
								request.fail( function (jqxhr) {} );
							}

		onclick    		: 	function () {
								console.log('content onclick!');
							}
	};

	// 3: Eventgerüst, falls notwendig

	// 4: Publikation
	return fn;

// - - - - - - - - - -
})(jQuery);

// DOM Part
$(document).ready(function () {
'use strict';
// - - - - - - - - - -

	content.init();
	$('#nav-main').on('click', 'button', content.onclick);

// - - - - - - - - - -
});













