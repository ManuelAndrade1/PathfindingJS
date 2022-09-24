
// Main variables
const N = 30;
let container = document.getElementsByClassName('container')[0]; // returns div.container object
let height = document.body.clientHeight * .85; // calculates 85% of body's height
let width = document.body.clientWidth;  // gets body's width
let	heightCalc = height / N;
let	widthCalc = width / N; 
// Formatting of strings to pass as CSS value
let colWidth = `repeat(${N}, ${widthCalc}px)`;  
let rowHeight = `repeat(${N}, ${heightCalc}px)`;

// Cell object 
class Cell {
	constructor(element, row, col) {
		this.element = element; // HTML element corresponding to that cell
		this.row = row; // The x position on the grid.
		this.col = col; // The y position on the grid.
	}
}

// Dynamically change grid setup based on window size. 
function setup() {
	// Same as in the beginning, gets height and width
	height = document.body.clientHeight * .85;
	width = document.body.clientWidth;
	// Calculates respective values
	heightCalc = height / N;
	widthCalc = width / N; 
	// Formats the strings
	colWidth = `repeat(${N}, ${widthCalc}px)`; 
	rowHeight = `repeat(${N}, ${heightCalc}px)`;
	// Updates column and row sizes
	container.style.gridTemplateColumns = colWidth;
	container.style.gridTemplateRows = rowHeight;
	// Updates HEIGHT and WIDTH to EACH cell.
	for(let i=0; i < N ** 2; i++) {
		cellArray[i].element.style.height = heightCalc;
		cellArray[i].element.style.width = widthCalc;
	}	
}

// Creates columns and rows
container.style.gridTemplateColumns = colWidth;
container.style.gridTemplateRows = rowHeight;

// Creates Cell Array containing all Cell objects
let cellArray = [];
for(let i=0;i < N; i++){
	for(let j=0;j < N; j++) {
		let temp = document.createElement('div'); // Creates div element
		temp.setAttribute('class', 'cell'); // Sets class to 'cell'
		temp.row = i; // Assigns row position
		temp.column = j; // Assigns column
		temp.style.height = heightCalc +'px'; // Assigns height to element
		temp.style.width = widthCalc +'px'; // Assigns width to element
		temp.addEventListener('click', function() {
			// Anonimous function to change temp background color based on mouse click
			color = temp.style.backgroundColor;
			console.log(color === '');
			temp.style.backgroundColor = (color === '') ? 'rgb(0, 0, 100)' : '';
		});
		cellArray.push(new Cell(temp, i, j)); // Adds Cell object to the array
		container.appendChild(temp); // Adds element to the DOM
	}
}

// Assigning function to window.resize event.
window.onresize = setup;

