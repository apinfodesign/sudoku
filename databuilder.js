var boardString = process.argv[2];

var boardArray = boardString.split('');


function dataBuilder(array) {
  var boardData = {};
  var lines = [0,9,18,27,36,45,54,63,72];
  lines.forEach(function(value, index){
    for (var i = value; i < value+9; i++) {
      boardData[i+1] = {value: array[i], x: (i+1) - (index * 10) + index, y: (index + 1), relations: relations};
    };

  })
  console.log(boardData);
  relations(boardData);
}

// Possible relations addition

// function relations (data) {
//     for (var key in data) {

//     }
// }


dataBuilder(boardArray);

