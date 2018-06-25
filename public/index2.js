$(document).ready(function() {
	randomBox();
});

function randomBox() {
	var types = new Array ('character', 'treasure', 'traps');
	var sources = new Array ('./images/link.png', './images/mastersword.png');

	var boxes = document.getElementsByClassName('box');
	var character_box = Math.floor(Math.random() * 16);
	var treasure_box = Math.floor(Math.random() * 16);

	while(character_box == treasure_box){
		treasure_box = Math.floor(Math.random() * 16);
	}

	boxes[character_box].className += (' ' + types[0]);
	boxes[treasure_box].className += (' ' + types[1]);

	var par = document.getElementsByClassName('box character');
	console.log(par);
	var img = document.createElement('img');
	img.src = sources[0];
	img.id = 'character';
	par[0].appendChild(img);

	par = document.getElementsByClassName('box treasure');
	console.log(par);
	img = document.createElement('img');
	img.src = sources[1];
	img.id = 'treasure';
	par[0].appendChild(img);
}


