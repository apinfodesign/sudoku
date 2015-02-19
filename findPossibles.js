// 


function findPossibles()

//	function findPossibles (sudokuArray)
		for x 1 to 9
			for y 1 to 9
				If blank
					evaluate this element (e.g. 1,1)
						for square value 1 to 9
							evaluate relations 
								 	evaluateRow
								  	evaluateColumn
								 	evaluateCurrentSquare
	 						assign value of x,y to valueArrayXY[] >>>> {eg: 3,5,8,9}


 module.exports = findPossibles();