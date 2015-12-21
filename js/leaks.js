var drops = [0, 0, 0, 0, 0, 0];

var bucket = {pos:3, level:0};

var barrel1 = 0;
var barrel2 = 0;

var bucket_size = 4, barrel_size = 100;


var drop_interval = 10;

var gameloop = 0;
var timer;


window.addEventListener('load',  function() { onReady() });

function onReady() {

	document.addEventListener('keydown', function(e) {keyPressed(e.keyCode); });

	//var ctx = $('#maincanvas')[0].getContext('2d');

	gameloop = 0;
	timer = setInterval(onTimer, 100);
}


function onTimer() {

	if ((gameloop % drop_interval) == 0) {
		// get random number between 1 and 5 to use as index to leaks array
		var leakpos = Math.floor(Math.random()*6);
		drops[leakpos]++;
		debug();

		// when a leak reaches the floor, stop the game loop
		for (i=0; i<drops.length; i++) {

			if (drops[i] == 9 && bucket.pos == i) {
				bucket.level++;
				drops[i] = 0;
			}

			if (drops[i] == 10) {
				clearInterval(timer);
			}
		}
	}

	gameloop++;


	updatePanel1();

}


function keyPressed(key) {
	switch (key) {
		//case 38 : alert('up');
		//break;

		//case 40 : alert('down');
		//break;

		case 37 : moveLeft();
		break;

		case 39 : moveRight();
		break;

		case 32 : console.log('empty bucket');
		break;
	}

}


function moveLeft() {
	bucket.pos--;
	if (bucket.pos < 0) bucket.pos = 0;
}


function moveRight() {
	bucket.pos++;
	if (bucket.pos > 5) bucket.pos = 5;
}


function updatePanel1() {

}


function updatePanel2() {

}


function debug() {
	console.log(gameloop + ': DROPS : ' + drops);
	console.log('BUCKET: ' + bucket.pos + ' : ' + bucket.level);
}
