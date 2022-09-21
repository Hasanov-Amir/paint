let cl = false;
let eraser = false;

function getColor() {
	let color = document.getElementById('color').value
	return color
}

function getSize() {
	let size = document.getElementById('size').value
	return size
}

function mouseDown() {
	cl = true
	console.log(cl)
}

function mouseUp() {
	cl =false
	console.log(cl)
}

function erase() {
	let er = document.getElementById('er')
	eraser = !eraser
	if (eraser) {
		er.style.background = 'red'
	} else {
		er.style.background = 'green'
	}
}

function clean() {
	let pixels = document.querySelectorAll('.black');
	pixels.forEach(pixel => {
		pixel.remove()
	})
}

onmousemove = function(e) {
	if (cl && (eraser==false) && (e.target.tagName != 'DIV')) {
		let pixel = document.createElement('div');
		pixel.className = 'black';
		pixel.style.top = `${e.clientY - 2.5}px`;
		pixel.style.left = `${e.clientX - 2.5}px`;
		pixel.style.background = getColor()
		pixel.style.width = `${getSize()}px`
		pixel.style.height = `${getSize()}px`
		document.querySelector('main').append(pixel);
	} else if (eraser==true) {
		if (cl && e.target.tagName != 'BUTTON' && e.target.tagName != 'HTML' && e.target.tagName != 'BODY' && e.target.tagName != 'INPUT' && e.target.tagName != 'HEADER') {
			e.target.remove();
		}
	}
}
