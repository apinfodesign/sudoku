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

function dataBuilder(array) {
  var boardData = {};
  var lines = [0,9,18,27,36,45,54,63,72];
  lines.forEach(function(value, index){
    for (var i = value; i < value+9; i++) {
      if(array[i] === ' '){
        boardData[i+1] = {value: null, x: xFinder(i, index), y: (index + 1), block: blockPopulator((index + 1), xFinder(i, index))};
      } else {
        boardData[i+1] = {value: parseInt(array[i]), x: xFinder(i, index), y: (index + 1), block: blockPopulator(index+1, xFinder(i, index))};}
      };

  })
  console.log(boardData);
}

// Possible relations addition

// function relations (data) {
//     for (var key in data) {

//     }
// }

dataBuilder(boardArray);

