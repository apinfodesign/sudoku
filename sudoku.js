var sudokuObject =
{ '1': { value: null, x: 1, y: 1, block: 1 },
 '2': { value: 9, x: 2, y: 1, block: 1 },
 '3': { value: 4, x: 3, y: 1, block: 1 },
 '4': { value: null, x: 4, y: 1, block: 2 },
 '5': { value: null, x: 5, y: 1, block: 2 },
 '6': { value: null, x: 6, y: 1, block: 2 },
 '7': { value: 3, x: 7, y: 1, block: 3 },
 '8': { value: null, x: 8, y: 1, block: 3 },
 '9': { value: null, x: 9, y: 1, block: 3 },
 '10': { value: 6, x: 1, y: 2, block: 1 },
 '11': { value: 1, x: 2, y: 2, block: 1 },
 '12': { value: null, x: 3, y: 2, block: 1 },
 '13': { value: 8, x: 4, y: 2, block: 2 },
 '14': { value: null, x: 5, y: 2, block: 2 },
 '15': { value: null, x: 6, y: 2, block: 2 },
 '16': { value: 4, x: 7, y: 2, block: 3 },
 '17': { value: null, x: 8, y: 2, block: 3 },
 '18': { value: null, x: 9, y: 2, block: 3 },
 '19': { value: 8, x: 1, y: 3, block: 1 },
 '20': { value: null, x: 2, y: 3, block: 1 },
 '21': { value: null, x: 3, y: 3, block: 1 },
 '22': { value: null, x: 4, y: 3, block: 2 },
 '23': { value: 4, x: 5, y: 3, block: 2 },
 '24': { value: null, x: 6, y: 3, block: 2 },
 '25': { value: null, x: 7, y: 3, block: 3 },
 '26': { value: null, x: 8, y: 3, block: 3 },
 '27': { value: null, x: 9, y: 3, block: 3 },
 '28': { value: 1, x: 1, y: 4, block: 4 },
 '29': { value: null, x: 2, y: 4, block: 4 },
 '30': { value: null, x: 3, y: 4, block: 4 },
 '31': { value: 3, x: 4, y: 4, block: 5 },
 '32': { value: null, x: 5, y: 4, block: 5 },
 '33': { value: 2, x: 6, y: 4, block: 5 },
 '34': { value: 6, x: 7, y: 4, block: 6 },
 '35': { value: 4, x: 8, y: 4, block: 6 },
 '36': { value: null, x: 9, y: 4, block: 6 },
 '37': { value: 5, x: 1, y: 5, block: 4 },
 '38': { value: 4, x: 2, y: 5, block: 4 },
 '39': { value: null, x: 3, y: 5, block: 4 },
 '40': { value: 6, x: 4, y: 5, block: 5 },
 '41': { value: 8, x: 5, y: 5, block: 5 },
 '42': { value: 7, x: 6, y: 5, block: 5 },
 '43': { value: null, x: 7, y: 5, block: 6 },
 '44': { value: 9, x: 8, y: 5, block: 6 },
 '45': { value: 2, x: 9, y: 5, block: 6 },
 '46': { value: null, x: 1, y: 6, block: 4 },
 '47': { value: 7, x: 2, y: 6, block: 4 },
 '48': { value: 6, x: 3, y: 6, block: 4 },
 '49': { value: 1, x: 4, y: 6, block: 5 },
 '50': { value: null, x: 5, y: 6, block: 5 },
 '51': { value: 4, x: 6, y: 6, block: 5 },
 '52': { value: null, x: 7, y: 6, block: 6 },
 '53': { value: null, x: 8, y: 6, block: 6 },
 '54': { value: 5, x: 9, y: 6, block: 6 },
 '55': { value: null, x: 1, y: 7, block: 7 },
 '56': { value: null, x: 2, y: 7, block: 7 },
 '57': { value: null, x: 3, y: 7, block: 7 },
 '58': { value: null, x: 4, y: 7, block: 8 },
 '59': { value: 7, x: 5, y: 7, block: 8 },
 '60': { value: null, x: 6, y: 7, block: 8 },
 '61': { value: null, x: 7, y: 7, block: 9 },
 '62': { value: null, x: 8, y: 7, block: 9 },
 '63': { value: 3, x: 9, y: 7, block: 9 },
 '64': { value: null, x: 1, y: 8, block: 7 },
 '65': { value: null, x: 2, y: 8, block: 7 },
 '66': { value: 8, x: 3, y: 8, block: 7 },
 '67': { value: null, x: 4, y: 8, block: 8 },
 '68': { value: null, x: 5, y: 8, block: 8 },
 '69': { value: 6, x: 6, y: 8, block: 8 },
 '70': { value: null, x: 7, y: 8, block: 9 },
 '71': { value: 5, x: 8, y: 8, block: 9 },
 '72': { value: 4, x: 9, y: 8, block: 9 },
 '73': { value: null, x: 1, y: 9, block: 7 },
 '74': { value: null, x: 2, y: 9, block: 7 },
 '75': { value: 7, x: 3, y: 9, block: 7 },
 '76': { value: null, x: 4, y: 9, block: 8 },
 '77': { value: null, x: 5, y: 9, block: 8 },
 '78': { value: null, x: 6, y: 9, block: 8 },
 '79': { value: 9, x: 7, y: 9, block: 9 },
 '80': { value: 6, x: 8, y: 9, block: 9 },
 '81': { value: null, x: 9, y: 9, block: 9 } };


function findPossibles(sudokuObject) {
	var row, column, squareNum;
	for (var key in sudokuObject) {
		var possibles = [];
		var obj = sudokuObject[key];
		var x = obj.x;
		var y = obj.y;

		if(obj.value === null){ 
			for (var intVal = 1; intVal <= 9; intVal++){
				matchRow(x, y, element);
				//matchColumn(x, y, element);
				
				if (matchRow == false && matchColumn == false){
					possibles.push();
				}
			}

		}	
	}
};	

function matchRow(x, y, element) {
	for (i = 1; i <= 9; i++){
		//extract the value of (x,i)
		if(element === sudokuObject[]) {
			console.log(element);
	}
	}
}

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