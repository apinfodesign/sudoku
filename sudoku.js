
var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var boardString = process.argv[2];
var boardArray = boardString.split('');

console.log(typeof boardString);

databuilder(boardArray, findOptions);


function findOptions(fullArray)
	{
	var row, col;
	for (row=0; row<9; row++)
		{
		for (col=0; col<9; col++)
			{console.log("row is " + row + " and col is " + col + " value is " + fullArray[row][col].value);
				if (fullArray[row][col].value === null)
					{
					console.log( fullArray[row][col].value );
					checkRow(row,col,fullArray);    	//assemble and return possible values
					checkCol(row,col,fullArray)			//assemble and return possible values
					//checkBox for (row.col)	//assemble and return possible values
					}
			}
		}
		console.log(fullArray[0][0])
 	};



function checkRow (row,col, fullArray){
 	for (i = 0; i < 9; i++){	// iterate across columns
 		//console.log(fullArray[row][col] + row + " " + col + "xxxxx");
 		if  ( (fullArray[row][i].value !== null) && (fullArray[row][i] !== fullArray[row][col]) 
 			)
 		// if you find a null
 		var toCheck = fullArray[row][i].value;
 		//console.log("tocheck is " + toCheck);
 		{   //console.log("i is " + i);
 		var possiblesList = fullArray[row][col].possibles;
 		 
 		deletePossibles(toCheck, possiblesList);
 		 
  		}
 		// console.log("Values at location x y: " + x + " " + y + " value " + i);
 	}
};

function checkCol (row,col, fullArray){
 	for (i = 0; i < 9; i++){	// iterate across rows
 		//console.log(fullArray[row][col] + row + " " + col + "xxxxx");
 		if  ( (fullArray[i][col].value !== null) && (fullArray[i][col] !== fullArray[row][col]) 
 			)
 		// if you find a null
 		var toCheck = fullArray[i][col].value;
 		//console.log("tocheck is " + toCheck);
 		{   //console.log("i is " + i);
 		var possiblesList = fullArray[row][col].possibles;
 		 
 		deletePossibles(toCheck, possiblesList);
 		 
  		}
 		// console.log("Values at location x y: " + x + " " + y + " value " + i);
 	}
};


function deletePossibles(toCheck, possiblesList){
		for (var i = 0; i < possiblesList.length; i++) {
 				if (possiblesList[i] === toCheck) {
 					possiblesList.splice(i, 1);
 					console.log("fullArray.possibles is " + 
 						possiblesList  );
 					return;
 				};
 			};

};


function matchBox (row,col){
};
