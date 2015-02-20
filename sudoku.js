//PUZZLES SOLVED
//" 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 "
//"   8 3 42  6  9  332   4 9  75 9  6 6  185  7 8  4 93  3 4   515  7  2  26 9 1   "

var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var checkBlock = require('./checkBlock.js');
var printer = require('./boardprinter.js');
var boardString = "8  2    5  97    4 25 1  9 2    7   96 3 1 52   6    1 8  4 73 7    65  3    8  9"
var boardArray = boardString.split('');

var cycleCount = 0;
var cycleCountLimit = 50;
var masterCycleCount = 0;
var masterCycleCountLimit = 1000;

var arrayDepot = [];
var arrayDepotIndex = 0;

var iterateControl = [' '];

var doneArray;   //to pass from findOptions to logSingleton

console.log('BEFORE: ');
printer(boardArray);

databuilder(boardArray, findOptions);
//set iteration control

function findOptions(fullArray){
	var row, col;
	var solvedSquares = 0;
	masterCycleCount = masterCycleCount + 1;
	if (masterCycleCount >= masterCycleCountLimit){
					console.log('Master Cycle Limit Exceeded');

					return 	}
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
		console.log('master cycle count: ' + masterCycleCount);
		console.log('cycle count: ' + cycleCount);
		console.log('array depot index: ' + arrayDepotIndex);
		console.log('array depot length ' + arrayDepot.length)
		//insertSingletonValues(fullArray);
 		insertSingletonValue(fullArray);   //insert ONLY ONE value
 
};

//Inserts only one singleton value prior to recalculation
function insertSingletonValue(fullArray){
	var possibleLengths = 0;
	var row, col;
	cycleCount = cycleCount +1;
	
	if (cycleCount === cycleCountLimit) {
		cycleCount = 0;
		console.log('calling findOptions from arrayDepot')
		arrayDepotIndex = arrayDepotIndex + 1;

		buildPrinterString(arrayDepot[0]);
		findOptions(arrayDepot.shift());

	};
	
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 1 && fullArray[row][col].value === null) {
				possibleLengths = 1;
				fullArray[row][col].value = fullArray[row][col].possibles[0];
				console.log('Singleton assigned at: ' + (col + 1) + ', ' + (9-row));
				console.log('Block is: ' + fullArray[row][col].block);
				console.log('Possibles Array for location is ' + fullArray[row][col].possibles[0]);
				buildPrinterString(fullArray);
				findOptions(fullArray);
			}
		}
	}
	if (possibleLengths === 0) {
		console.log('NO NEW POSSIBLES ARRAYS WITH A LENGTH OF 1');
		buildPrinterString(fullArray);
		insertDupleValues(fullArray);
	}
};

function insertDupleValues(fullArray){
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 2 && fullArray[row][col].value === null) {
				
				//clone fullArray
				var secondChoice = clone(fullArray);
				//set secondchoice value to SECOND possibility
				secondChoice[row][col].value = secondChoice[row][col].possibles[1];
				//send full Array clone to arrayDepot
				arrayDepot.push(secondChoice);
				//set fullArray value to FIRST possibility
				fullArray[row][col].value = fullArray[row][col].possibles[0];
				console.log('duple assigned at ' + (col + 1) + ', ' + (9-row));
				buildPrinterString(fullArray);
				console.log('Other dupel possible ');
				buildPrinterString(arrayDepot[arrayDepot.length-1]);
				findOptions(fullArray);
			}
		}
	}
}


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

function clone (existingArray) {
   var newObj = (existingArray instanceof Array) ? [] : {};
   for (i in existingArray) {
      if (i == 'clone') continue;
      if (existingArray[i] && typeof existingArray[i] == "object") {
         newObj[i] = clone(existingArray[i]);
      } else {
         newObj[i] = existingArray[i]
      }
   }
   return newObj;
}

