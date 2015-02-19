 

var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var boardString = process.argv[2];
var boardArray = boardString.split('');
 
databuilder(boardArray, findOptions);

function findOptions (object) {
		var row, col;
	for (var row = 0; row < 8; row++) {
		for (var col = 0; col < 8; col++) {
			var box = object[row][col].box;
			console.log(box);
			// matchRows(row, col);
			// matchColumns(row, col);
			// matchBoxes();
		}
	};
}  

// function matchRows () {
// 	if 
// }