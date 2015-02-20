var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var checkBlock = require('./checkBlock.js');
var printer = require('./boardprinter.js');
var boardString = " 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 ";
var boardArray = boardString.split('');
var cycleCount=0;

console.log('BEFORE: ');
//printer(boardArray);


console.log('AFTER: ');
//printer(boardArray);

databuilder(boardArray, findOptions);

function findOptions(fullArray){
	var row, col;
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {	
			//console.log('row: ',row,'col: ',col);
			//console.log("------------------");
			//	console.log("row is " + row + " and col is " + col + " value is " 
			//		+ fullArray[row][col].value + " and block is " + fullArray[row][col].block);
			if (fullArray[row][col].value === null) {
				checkRow(row,col,fullArray);    	//assemble and return possible values
				checkCol(row,col,fullArray);			//assemble and return possible values
				temprow=row+1;
				tempcol=col+1;
				boxDeletePossibles(fullArray[row][col].possibles, checkBlock(temprow, tempcol, fullArray));	//assemble and return possible values
			}
		}
	}
		insertSingletonValues(fullArray);
		//logSingletonValues(fullArray);
		//console.log(fullArray[3][1] )
};

function findOptions(fullArray){
	var row, col;
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {	//console.log("------------------");
			//	console.log("row is " + row + " and col is " + col + " value is " 
			//		+ fullArray[row][col].value + " and block is " + fullArray[row][col].block);
				if (fullArray[row][col].value === null) {

						checkRow(row,col,fullArray);    	//assemble and return possible values
						checkCol(row,col,fullArray);			//assemble and return possible values
						temprow=row+1;
						tempcol=col+1;
						boxDeletePossibles(fullArray[row][col].possibles, checkBlock(temprow, tempcol, fullArray));	//assemble and return possible values
					}
				}
			}
		insertSingletonValues(fullArray);
		//logSingletonValues(fullArray);
		//console.log(fullArray[3][1] )
 	};

function logSingletonValues(fullArray) {
	//iterate through big array
	var row, col;
	var lengthOne=0;
	
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 1) {
				//console.log('possibles: ',fullArray[row][col].possibles,' x: ',fullArray[row][col].x,
				//'y: ',fullArray[row][col].y);
			}
		}
	}
}


function insertSingletonValues(fullArray){
	buildPrinterString(fullArray);

	//iterate through big array
	var row, col;
	var lengthOne=0;
	
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 1) {
				fullArray[row][col].value = fullArray[row][col].possibles[0];
				lengthOne = lengthOne +1;	
			}
		}
	}
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

