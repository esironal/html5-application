// Eventverarbeitung

// Javascript
// W3:
// 3. Parameter: useCapturing?
var col = document.querySelectorAll('a');


for (var i=0; i<col.length, i++) {
	col[i].addEventListener('click', fn.eventHandler, true);
}

// Eventdelegation
var obj = document.querySelector('nav');
obj.addEventListener('click', fn.eventHandler, false);


// jQuery Eventdelegation
var data = {};

$('nav#nav-main').on('click', 'a', data, fn.eventHandler);

fn = {
	eventHandler : function () {
		event.target;
	}
}

<nav id="nav-main">
	<ul class="nav nav-stacked nav-pills">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</nav>