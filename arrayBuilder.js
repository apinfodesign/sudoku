var boardString = " 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 ";

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
  var lines = [1,10,19,28,37,46,55,64,73,82];
  
  for (var i = 0; i < lines.length; i++) {
    if (y < lines[i]) {
     return relationBuilder(lines[i-1], (lines[i]-1), 1);
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

function rowValues(x) {
  var rowValues = [];
  x()

}

function dataBuilder(array, callback) {
  var boardData = [];
  var rowValues = [];
  var columnValues = [];
  var blockValues = [];
  var lines = [0,9,18,27,36,45,54,63,72];
  lines.forEach(function(value, index){
    rowValues[index] = [];
    subArray = []
    for (var i = value; i < value+9; i++) {
      var x = xFinder(i, index);
      if(array[i] === ' '){
        subArray.push({value: null, x: x, y: (9 - index), block: blockPopulator((index + 1), x), possibles: [1,2,3,4,5,6,7,8,9]});
        
      } else {
        subArray.push({value: parseInt(array[i]), x: x, y: (9 - index), block: blockPopulator(index+1, x)});
        rowValues[index].push(parseInt(array[i]));
      
      
    }
    boardData[index] = (subArray);
  }

  })
 
    callback(boardData );
}

// Possible relations addition

// function relations (data) {
//     for (var key in data) {

//     }
// }

module.exports = dataBuilder;
