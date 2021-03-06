function boardDivide() {
  console.log('+-------------+-------------+-------------+');
}
var divider = '| ';
var fullArrayLength = '*';

function line(sliceStart, sliceEnd, boardArray) {
  var linePrint = '| ';
  var boxPrint = function(boxSliceStart, boxSliceEnd) {
      boardArray.slice(boxSliceStart,boxSliceEnd).forEach(function(number){
      
      //fullArrayLength = fullArray[row][col].possibles.length;

      //conditionally print number or other value if null
      if (number > 0 ){  
        linePrint += ('  ' + number + ' ')
        }
      else if (number<1){
        linePrint += ('['+ number + ']')
        }  
    }) 
      linePrint += divider;
  }
  boxPrint(sliceStart, sliceEnd);
  boxPrint(sliceStart+3, sliceEnd+3);
  boxPrint(sliceStart+6, sliceEnd+6);
  console.log(linePrint);
}
function boardPrinter(boardArray) {
  var box1 = [0,9,18]
  var box2 = [27,36,45]
  var box3 = [54,63,72]
  
  boardDivide();

  box1.forEach(function(value, index){
    line(box1[index], box1[index]+3, boardArray);
  })
  boardDivide();
  box2.forEach(function(value, index){
    line(box2[index], box2[index]+3, boardArray);
  })
  boardDivide();
  box3.forEach(function(value, index){
    line(box3[index], box3[index]+3, boardArray);
  })    
  boardDivide();
};




//' 94   3  61 8  4  8   4    1  3 264 54 687 92 761 4  5    7   3  8  6 54  7   96 '
module.exports = boardPrinter;
 
