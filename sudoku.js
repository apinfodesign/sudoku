var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var checkBlock = require('./checkBlock.js');
var printer = require('./boardprinter.js');
var boardString = " 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 ";
var boardArray = boardString.split('');
var cycleCount = 0;
var cycleCountLimit = 20;

var iterateControl = [' '];

var doneArray;   //to pass from findOptions to logSingleton

console.log('BEFORE: ');
printer(boardArray);

databuilder(boardArray, findOptions);
//set iteration control

function findOptions(fullArray){
	var row, col;
	var solvedSquares = 0;
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {	
				if (fullArray[row][col].value === null) {
						solvedSquares = 1;
						checkRow(row,col,fullArray);    	//assemble and return possible values
						checkCol(row,col,fullArray);			//assemble and return possible values
						temprow = row+1;
						tempcol = col+1;
						boxDeletePossibles(fullArray[row][col].possibles, checkBlock(temprow, tempcol, fullArray));	//assemble and return possible values
				}
		}
	}
	if (solvedSquares === 0) {
		console.log('NO MORE NULL VALUES: ');
		buildPrinterString(fullArray);
		return;
	};
		insertSingletonValues(fullArray);

};

function insertSingletonValues(fullArray){
	var possibleLengths = 0;
	var row, col;
	cycleCount = cycleCount +1;
	if (cycleCount > cycleCountLimit) {
		console.log('cycle limit reached'); 
		return;
	};
	
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 1 && fullArray[row][col].value === null) {
				possibleLengths = 1;
				fullArray[row][col].value = fullArray[row][col].possibles[0];
			}
		}
	}
	if (possibleLengths === 0) {
		console.log('NO NEW POSSIBLES ARRAYS WITH A LENGTH OF 1');
		buildPrinterString(fullArray);
	}
	findOptions(fullArray);
};


function buildPrinterString(fullArray) {
	var printableArray = [];
		fullArray.forEach(function(record) {
			for (var i = 0; i <= 8;i++) {
				if (record[i]['value'] === null) {
					printableArray.push(' ');
				} else {
					printableArray.push(record[i]['value']);
				}
			}
		});
	printer(printableArray);
};

function checkRow (row,col, fullArray){
 	for (i = 0; i < 9; i++) {	// iterate across columns
 		if ((fullArray[row][i].value !== null) && (fullArray[row][i] !== fullArray[row][col])) {
 			// if you find a null
 			var toCheck = fullArray[row][i].value;
 			var possiblesList = fullArray[row][col].possibles;
		 	deletePossibles(toCheck, possiblesList);
   		}
  	}
};

function checkCol (row,col, fullArray){
 	for (i = 0; i < 9; i++) {	// iterate across rows
 		if ((fullArray[i][col].value !== null) && (fullArray[i][col] !== fullArray[row][col])) {
 		// if you find a null
	 		var toCheck = fullArray[i][col].value;    
	 		var possiblesList = fullArray[row][col].possibles;
	   		deletePossibles(toCheck, possiblesList);
 		}
  	}
};

//iterate through possibles array and delete the toCheck element from possibles array
function deletePossibles(toCheck, possiblesList){
	if (possiblesList.indexOf(toCheck) >= 0) {
		for (var i = 0; i < possiblesList.length; i++) {
			if (possiblesList[i] === toCheck) {
				possiblesList.splice(i, 1);
			};
		};
	};
};


function boxDeletePossibles(possiblesList, callback){
 	var array = callback;
	array.forEach(function(value, index){
		deletePossibles(value, possiblesList);
	})
};

