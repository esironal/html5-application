// Appcache

var cache = (function ($) {
'use strict';
// - - - - - - - - - -

	var
		fn = {},
	end;

	fn = {
		onupdateready 	: 	function () {
								applicationCache.swapCache();
								window.location.reload();
							},
		onidle 			: 	function () {
								console.log('cache idle!');
							},
		onchecking 		: 	function () {
								console.log('cache checking!');
							},
		ondownloading 	: 	function () {
								console.log('cache loading!');
							},
		onobsolete 		: 	function () {
								console.log('cache obsolete!');
							},
	};

	return fn;

// - - - - - - - - - -
})(jQuery);

$(document).ready(function () {
	$(applicationCache).on('updateready', cache.onupdateready);
	$(applicationCache).on('idle',        cache.onidle);
	$(applicationCache).on('checking',    cache.onchecking);
	$(applicationCache).on('downloading', cache.ondownloading);
	$(applicationCache).on('obsolete',    cache.onobsolete);
});