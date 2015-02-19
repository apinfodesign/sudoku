console.log('got here 1');

var databuilder = require('./arraybuilder.js');
//var printer = require('./boardprinter.js');

//var boardString = process.argv[2];

console.log('got here 2')

var boardString = " 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 ";

console.log(typeof boardString);

console.log(boardString + "   boardString");

var boardArray = boardString.split('');


//how to read the object
//var read = sudokuObject['81'].x ;
//console.log("sudokuObject is " + sudokuObject);	
//console.log("sudokuObject read is " + read ) ;	

//how to read the sudArray
//console.log("sudArray is " + sudArray[1][1].x);


// var databuilder = require('./databuilder.js')
// var printer = require('./boardprinter.js')
// var boardString = process.argv[2];
// var boardArray = boardString.split('');

//take boardArray, creates sudoku object, sends it to findOptions
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




// function checkCol (row,col){
//  	for (i = 1; i <= 9; i++){	// iterate across columns
//  		if (boardArray[i][col].value !== null) && (boardArray[i][col] !== boardArray[row][col] ) ) 
//  		// if you find a null
//  		{   
//  			boardArray[row][col].possibles.push(boardArray[i][col].value)
//  		}
 
//  	}
// };


function matchBox (row,col){
};

  

function findPossibles(sudokuObject) {
	var countnull=0;  //testing only
	var row, column, squareNum;
	for (var key in sudokuObject) {
		var possibles = [];
		var obj = sudokuObject[key];
		var x = obj.x;
		var y = obj.y;


		//if current sequare has value NULL
		if(obj.value === null){ 

			countnull= countnull + 1;
			// console.log("found this many nulls:" + countnull);

			//iterate over all possible values for the empty square
			for (var intVal = 1; intVal <= 9; intVal++){
				var element=intVal;   
				//pass intVal of location x.y to matchRow
				matchRow(x, y, element);
				//matchColumn(x, y, element);
				
				if (matchRow == false && matchColumn == false){
					possibles.push();
				}
			}
		}	
	}
};	

//matchRow checks 9 squares in row for match with element
// x and y = where    element = what we are looking for 
function matchRowOLD(x, y, element) {
	var testcount=0;




	// iterate over all X for this Y row
	for (i = 1; i <= 9; i++){	      
	//check 81 locations to find 8 locations for comparison 
		for (i=0; i<80; i++){
			var index = i+1;
			// console.log(sudArray[index].y + " is sudArray[index].y");
			// console.log(sudArray[index].value + " is sudArray[index].value");
			if 	(   
						(sudArray[index].x 	=== x )
 					
 					&& ( sudArray[index].y 	=== y )  

				    && ( element        	=== sudArray.value) 
			    )
				{ testcount = testcount+1;
				  console.log("testcount is " + testcount);
				  return true;
				}
 			//console.log(element + " is the element");
		}
	}
};
 

// function findPossibles(sudokuObject) {
// 	var row, column, squareNum;
// 	for (var key in sudokuObject) {
// 		var possibles = [];
// 		var obj = sudokuObject[key];
// 		var x = obj.x;
// 		var y = obj.y;

// 		if(obj.value === null){ 
// 			for (var intVal = 1; intVal <= 9; intVal++){
// 				matchRow(x, y, element);
// 				//matchColumn(x, y, element);
				
// 				if (matchRow == false && matchColumn == false){
// 					possibles.push();
// 				}
// 			}

// 		}	
// 	}
// };	

// function matchRow(x, y, element) {
// 	for (i = 1; i <= 9; i++){
// 		//extract the value of (x,i)
// 		if(element === sudokuObject[]) {
// 			console.log(element);
// 	}
// 	}
// }

//databuilder(boardArray);
//printer();
 
// //		var y = key.y;/
// 	//	console.log('x,y: ',x+' , '+y);

// 		//rows
// 		
// 			//look at the value of x,r
// 			///console.log('r: ',r);
// 			for (var y = 1; y <= 9; y) {
// 			//look at the value of col, y
// 			//console.log('c: ',y);
// 			}
// 		}  
// 		//columns
// 	}
// }


//findOptions(sudokuObject);

//findPossibles(sudokuObject);