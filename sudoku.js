//how to read the object
var read = sudokuObject['81'].x ;
console.log("sudokuObject is " + sudokuObject);	
console.log("sudokuObject read is " + read ) ;	

//how to read the sudArray
console.log("sudArray is " + sudArray[1][1].x);


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
function matchRow(x, y, element) {
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

findPossibles(sudokuObject);