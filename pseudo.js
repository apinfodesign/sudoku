var squares = {
	1: {
		x: 1,
		y: 1,
		value: 9,
		relations: [],
		impossibles: []
	},
	2: {
		x: 2,
		y: 1,
		value: null,
		relations: [2,3,4,5,6,7,8,9,10,19,28,37,46,55,64,73],
		impossibles: [value of 1]
	},
	3: {
		x: 3,
		y: 1,
		value: null,
		relations: [10,11,12,13,14,15,16,17,18,2,11,20,29,38,47,56,65,74],
		possibles: []
	},
	4: {
		x: 4,
		y: 1,
		value: null,
		relations: []
	}
	....

}

-- populate the puzzle
-- build the relations 



build relations dynamically for each square
for (x=1 to 9) {
	push [x * y] // row
	push [y+9] // column
	push [y.mod(3)] // square - use math
}


loop through object
 - eliminate all squares where value is not null - ex. eliminate sq one
 - add value (1) to the impossibles array in objects related to the eliminated one 

loop through object
- for each square that has only one possible (has 8 impossibles), push the possible into that 
	square's value field and eliminate the square from the object 





loop through

for i= 1 to 9
	
check all objects that are 1, i

check all objects that are i, 1



check all objects that are 1,x
check all objects that are x,1
check all objects where x <=3 and y <=3