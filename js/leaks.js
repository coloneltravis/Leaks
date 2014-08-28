var leaks = [0, 0, 0, 0, 0, 0];

var bucket = 0;

var barrel1 = 0;
var barrel2 = 0;

var bucket_size = 5, barrel_size = 100;


var drop_interval = 10;

var gameloop = 0;


$(document).ready(function(e) {
	$(document).keydown(function(e) {keyPressed(e.keyCode); });

	var ctx = $('#maincanvas')[0].getContext('2d');

	gameloop = 0;
	setInterval(onTimer(), 100);
});


function onTimer() {

	if ((gameloop % drop_interval) == 0) {
		// get random number between 1 and 5 to use as index to leaks array		
		var leakpos = Math.floor(Math.random()*6);
		leaks[leakpos]++;
		
		//alert('leak!');
	}

	gameloop++;

	debug();

	updatePanel1();

}


function keyPressed(key) {
	switch (key) {
		//case 38 : alert('up');
		//break;

		//case 40 : alert('down');
		//break;

		case 37 : alert('move left');
		break;
		
		case 39 : alert('move right');
		break;
		
		case 32 : alert('empty bucket');
		break;								
	}
	
}


function updatePanel1() {

}


function updatePanel2() {

}


function debug() {
	$('#debug').empty();

	var str = 'leaks: ';
	for (var i=0; i<leaks.length; i++)
		str += parseInt(leaks[i]) + ',';

	$('#debug').append(str + '<br/>');
}
	