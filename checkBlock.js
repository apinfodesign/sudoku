//blockChecker.js
//takes three parameters: x and y coordinates, puzzle object

module.exports = function checkBlock(x, y, obj) {

	var colParam = x; var rowParam = y; var sudokuObj = obj;
	var colIndex = colParam - 1; var rowIndex = rowParam - 1; 
	var block = sudokuObj[colIndex][rowIndex]['block'];
	var impossibles = [];

	for (var i = 0; i <= 8; i++) {
		for (var j = 0; j <= 8; j++) {
			if ((sudokuObj[i][j]['block'] === block) && (sudokuObj[i][j]['value'] !== null)) {
	    		impossibles.push(sudokuObj[i][j]['value']);
			}
		}
	}
	return impossibles;
}

