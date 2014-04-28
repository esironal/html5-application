// In Javascript ist alles ein Objekt
var a = 1;
var b = null;
window.a
window.b

var f = function () {
	var a = 1;
	window.b = 2;
};

window.f.a
window.b


// DOM Objekte
window
window.setInterval()

// nach jQuery Einbindung
window.jQuery
window.$


// ECMA 5; ECMA 6 - allgemeines JS
Number
String
Math
Date
...

// Objekte als Funktionen
// -> Eine Funktion ist auch ein Objekt

var myFunc = function () {};
myFunc(); // Funktionsaufruf
myFunc;   // Funktionszeiger

// Module-Block Pattern
// -> Singletons als Funktionskomponenten

// Immediate function
// Selbstausführende Funktion
// Liefert ein kompiliertes Objekt zurück

var singleton = (function ($) {
//  ECMA regelkonform!
'use strict';
// - - - - - - - - - -

	// 1: Initialisierung
	var
		fn   = {},
		data = null,
	end;

	// 2: Methoden, funktionale Objekte
	// Objekt in JSON Schreibweise
	fn = {
		init    : function () {},
		onclick : function () {}
	};

	// 3: Eventgerüst, falls notwendig

	// 4: Publikation
	return fn;

// - - - - - - - - - -
};)(jQuery);

// DOM Anwendung des Singletons
document
	.querySelector('#id')
	.addEventListener('click', singleton.onclick, false);
 













