let canvasWidth = 400;
let canvasHeight = 400;
let rows = 3;
let cols = 3;
let grid = [];
for (let i = 0; i < rows; i++) {
	let row = [];
	for (let j = 0; j < cols; j++) {
		row.push("");
	}
	grid.push(row);
}

let cellWidth = canvasWidth / cols;
let cellHeight = canvasHeight / rows;
function setup() {
	createCanvas(canvasWidth, canvasHeight);
}
function draw() {
	background(100);
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			rect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
			fill("black");
			textSize(50);
			text(grid[i][j], j * cellWidth + 35, i * cellHeight + 70);
		}
	}
}
