let x = 100;
let xSpeed = 3;
let y = 200;
let ySpeed = 2;
function setup() {
	createCanvas(600, 400);
}
function draw() {
	background(100);
	x += xSpeed;
	y += ySpeed;
	circle(x, y, 50);
	if (x > width - 25 || x < 25) {
		xSpeed = xSpeed * -1;
	}
	if (y > height - 25 || y < 25) {
		ySpeed = ySpeed * -1;
	}
}
