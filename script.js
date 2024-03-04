let canvasWidth = 300;
let canvasHeight = 300;
let rows = 10;
let cols = 5;
let grid = [];
for (let i = 0; i < rows; i++) {
	let row = [];
	for (let j = 0; j < cols; j++) {
		row.push("");
	}
	grid.push(row);
}

let cellWidth = canvasWidth / grid[0].length;
let cellHeight = canvasHeight / grid.length;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			fill("white");
			rect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
			fill("black");
			textSize(50);
			text(grid[i][j], j * cellWidth + 30, i * cellHeight + 70);
		}
	}
}
function draw() {}
