var boardString = process.argv[2];

var boardArray = boardString.split('');

var xFinder = function(i, index){
  return (i+1) - (index * 10) + index;
}

var blockPopulator = function (index, xFinder) {
  var leftBoxX = xFinder < 4;
  var midBoxX = xFinder > 3 && xFinder < 7;
  var rightBoxX = xFinder > 6 && xFinder < 10;
  var topBoxY = index < 4;
  var midBoxY = index > 3 && index < 7;
  var botBoxY = index > 6 && index < 10;


  if(topBoxY && leftBoxX) {
    return 1;
  }
  if(midBoxX && topBoxY) {
    return 2;
  } 
  if(rightBoxX && topBoxY) {
    return 3;
  } 
  if(leftBoxX && midBoxY){
    return 4;
  }
  if(midBoxX && midBoxY){
    return 5;
  }
  if(rightBoxX && midBoxY){
    return 6;
  }
  if(leftBoxX && botBoxY){
    return 7;
  }
  if(midBoxX && botBoxY){
    return 8;
  }
  if(rightBoxX && botBoxY) {
    return 9;
  };
}
function relationBuilder (start, end, step){
  var relations = []
    while (step > 0 ? end >= start : end <= start) {
        relations.push(start);
        start += step;
    }
    return relations;
}
function rowRelations(y){
  var lines = [0,9,18,27,36,45,54,63,72,81];
  
  for (var i = 0; i < lines.length; i++) {
    if (y <= lines[i]) {
     return relationBuilder(lines[i-1], lines[i], 1);
    }
  };
}
function columnRelations(x) {
  var columns = [1,2,3,4,5,6,7,8,9]
  for (var i = 0; i < columns.length; i++) {
    if(columns[i] === x){
      return relationBuilder(columns[i], (columns[i] + 72), 9);
    }
  };

}

function dataBuilder(array) {
  var boardData = {};
  var lines = [0,9,18,27,36,45,54,63,72];
  lines.forEach(function(value, index){
    for (var i = value; i < value+9; i++) {
      if(array[i] === ' '){
        boardData[i+1] = {value: null, x: xFinder(i, index), y: (9 - index), block: blockPopulator((index + 1), xFinder(i, index)), row: rowRelations(i+1), column: columnRelations(xFinder(i, index))};
      } else {
        boardData[i+1] = {value: parseInt(array[i]), x: xFinder(i, index), y: (9 - index), block: blockPopulator(index+1, xFinder(i, index)), row: rowRelations(i+1), column: columnRelations(xFinder(i, index))};
      };
    }

  })
  console.log(boardData);
}

// Possible relations addition

// function relations (data) {
//     for (var key in data) {

//     }
// }

dataBuilder(boardArray);

