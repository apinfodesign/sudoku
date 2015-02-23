//PUZZLES SOLVED
//" 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 "
//"   8 3 42  6  9  332   4 9  75 9  6 6  185  7 8  4 93  3 4   515  7  2  26 9 1   "
//"8  2    5  97    4 25 1  9 2    7   96 3 1 52   6    1 8  4 73 7    65  3    8  9"
//"7      4 2 9 416      6   11   7  8 8 74132 9 9  8   56   2      413 8 2 8      6"
//"2 97   3    954 7    3 1  8 5  4 7   2 5 8 1   4 6  2 4  8 5    3 412    8   71 3"
//"   3  8 6    793  13 8      2 6  9  96     74  8  5 1      6 93  348    2 6  3   ";
 //"45     3    8 1    9           5  9 2  7     8         1  4          7 2   6  8  "
 //"  76   32 1   38  6   4        9   3 8  5  2 5   6        1   7  98   6 87   64  ";
//NOT SOLVED
 
var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var checkBlock = require('./checkBlock.js');
var printer = require('./boardprinter.js');


//NOT YET SOLVED 

var boardString = "93      1 67    2 8     3   2  7    6   3 9      2 46 4  6      9  5   3     4   "

//SOLVABLE
//var boardString = "               9  97 3      1  6 5    47 8  2     2  6 31  4      8  167 87      "
//var boardString = "  2  1  8 1  8  6 7  2  1  8  1  9   7  2  3   6  4  2  1  6  5 3  1  9 5  9  4  ";

//var boardString = "7      4 2 9 416      6   11   7  8 8 74132 9 9  8   56   2      413 8 2 8      6";
//var boardString = "   8 3 42  6  9  332   4 9  75 9  6 6  185  7 8  4 93  3 4   515  7  2  26 9 1   "

var unsolvedArraySize;  // sums length of all possibles arrays
var boardArray = boardString.split('');
var masterCycleCount = 0;
var masterCycleCountLimit = 5000;
 
var arrayDepot = [];
var success=false;   //use to end program when board is filled 

//temp delete starting state
console.log('BEFORE: ');
printer(boardArray);


//Main program call
while (!success){
databuilder(boardArray, findOptions);
//set iteration control
}


function findOptions(fullArray){
	var row, col;
	var solvedSquares = 0;
	masterCycleCount = masterCycleCount + 1;


	if (masterCycleCount >= masterCycleCountLimit){
					console.log('Master Cycle Limit Exceeded');

					return 	}
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {	

//diagnostic
//console.log ("line 51 fullArray[row][col].value " + fullArray[row][col].value + " at row: " + row + " col: " + col );				
			
				if (fullArray[row][col].value === null) {

//diagnostic 	
//console.log ("line 55 fullArray[row][col].value " + fullArray[row][col].value + " at row: " + row + " col: " + col );				
	

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
		console.log('NO MORE NULL VALUES: ');  // no empty squares left
		buildPrinterString(fullArray);
		return;
	};
		console.log('master cycle count: ' + masterCycleCount);
		console.log('array depot length ' + arrayDepot.length)
 		insertSingletonValue(fullArray);   //insert ONLY ONE value
};

//Inserts only one singleton value prior to recalculation
function insertSingletonValue(fullArray){
	var possibleLengths = 0;
	var row, col;
 
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			
			if (fullArray[row][col].possibles.length === 1 && fullArray[row][col].value === null) {

				possibleLengths = 1;
				
				fullArray[row][col].value = fullArray[row][col].possibles[0];  //assign the value!
				

				console.log('Singleton assigned at col: ' + (col + 1) + ', row:' + (9-row));
				console.log('Block is: ' + fullArray[row][col].block);
				buildPrinterString(fullArray);
 

				//after finding ONE singleton, find new options
				console.log("Calling findOptions after one singleton possibles added.")
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
	var duplePossibles = 0;
	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {
			if (fullArray[row][col].possibles.length === 2 && fullArray[row][col].value === null) {
 
 
				duplePossibles = 1;
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

// the NEW VERSION of buildPrinterString 
function buildPrinterString(fullArray){
	var printableArray = [];
	var set;
	var unsolvedArraySize = 0;  // reset sum of length of all possibles arrays

	for (row=0; row<9; row++) {
		for (col=0; col<9; col++) {		
			if (fullArray[row][col].value === null){
				//console.log("fullarray row col has null and length is " + fullArray[row][col].possibles.length)
				var set = ' ';
				//if null pass in negative number describing length of possibles array for diagnostics - Number will be negative and in brackets in printout
				switch( fullArray[row][col].possibles.length ){
					case 1:	 set=-1; break;
					case 2:	 set=-2; break;
					case 3:  set=-3; break;
					case 4:  set=-4; break;
					case 5:  set=-5; break;
					case 6:  set=-6; break;
					case 7:  set=-7; break;
					case 8:  set=-8; break;
					case 9:  set=-9; break;
					  
				}
				//console.log ("set becomes: " + set);
				unsolvedArraySize = unsolvedArraySize + set;
			 	var space=set;	
				printableArray.push(space);
			}
			else {
			//console.log("fullarray row col .value has value" + fullArray[row][col].value)
				squareValue = fullArray[row][col].value; 
				printableArray.push( squareValue );
			}
		} //close for
	} //close for
	printer(printableArray);
	console.log("Total length of all posssibles arrays is: " + (-1 * unsolvedArraySize));
	
	if ( unsolvedArraySize === 0 && masterCycleCount > 1){
		console.log("Success! Solved after cycle count of " + masterCycleCount);
		success = true;
		console.log(success);
		window.alert ("found it");  
			// this does not work, but it stops execution as needed!
		}


};// close final

// PREVIOUS VERSION OF BUILD PRINTER STRING - DELETE
// function buildPrinterString(fullArray) {
// 	var printableArray = [];
// 		fullArray.forEach(function(record) {
// 			for (var i = 0; i <= 8;i++) {
// 				if (record[i]['value'] === null) {
					 
// 					printableArray.push(' ');
// 				} else 
// 					{
// 					printableArray.push(record[i]['value']);
// 				}
// 			}
// 		});
// 	console.log(printableArray + " is printableArray");
// 	printer(printableArray);
// };

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

	if (possiblesList.indexOf(toCheck) > -1) {
		for (var i = 0; i < possiblesList.length; i++) {
			if (possiblesList[i] === toCheck) {
				if (possiblesList.length < 2) {
 					console.log('ERROR CHECKER WORKED ___________________ ON SQUARE ');
					
					//console.log(arrayDepot[0][0]['possibles']);
					
					/// Temp comment out -  go to  first in
					 //findOptions(arrayDepot.shift());
	
					/// Temp comment out -  go to  last in
					 findOptions(arrayDepot.pop());

					///begin with random arrayDepot instead of first or last in
					 // randomArrayDepot = arrayDepot.splice(Math.floor(Math.random() * arrayDepot.length), 1)[0];
					 // findOptions(randomArrayDepot);

				} else {
					possiblesList.splice(i, 1);
				}
				
			};
		};
	};
};

// // 
// function selectBestFromArrayDepot(arrayDepot){
// 	for (i=0; i<arrayDepot.length; i++)
// 		for (row=0; row<9; row++) {
// 			for (col=0; col<9; col++) {		
// 				if (fullArray[row][col].value <0 {
// 					sumPossibles=sumPossibles + (fullArray[row][col].possibles;

// };


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

