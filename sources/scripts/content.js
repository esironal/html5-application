// Content Module

var content = (function ($) {
'use strict';
// - - - - - - - - - -

	// 1: Initialisierung
	var
		element  = null,
		response = null,
		dataType = null,

		fn   = {},
		data = null,

		url	          = $('#btn-user').attr('data-load'),
		context       = '#content',
		attributeList = {'A' : 'href', 'FORM' : 'action', 'BUTTON' : 'data-load', 'SPAN' : 'data-load'},
	
	end;

	// 2: Methoden, funktionale Objekte
	// Objekt in JSON Schreibweise
	fn = {
		// Attributes
		data       : null,
		other_data : null,

		// Methods
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

								fn.loadHtml();
							},

		load            : 	function () {
								// block the browser!
								event.preventDefault();

								// Url und Datentyp ermitteln
								// 1: Tagname ermitteln
								element  = event.target.tagName;
								url      = $(event.target).attr(attributeList[element]);

								fn.loadHtml();

								// 2: Datentyp ermitteln
								dataType = url.substring(url.search(/\./)+1, url.length);
							},

		showHtmlContent : 	function (context, response) {
								$(context).html(response);
							},

		loadHtml  		: 	function () {
								var request = $.ajax({ url : url, context : context });
								
								request.done( function (response) {
									fn.showHtmlContent(this, response);
								} );
								request.fail( function (jqxhr) {} );
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
	$('#nav-main').on('click', 'button', content.load);

// - - - - - - - - - -
});













