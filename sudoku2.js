var databuilder = require('./databuilder.js')
var printer = require('./boardprinter.js')
var boardString = process.argv[2];
var boardArray = boardString.split('');

function rowChecker () {

}

function findPossibles (object, rowValues, columnValues, blockValues, callback) {
 
   for (var i = 1; i < object.length; i++) {
    var value = object[i].value;
    var x = object[i].x;
    var y = object[i].y;
    var row = object[i].row;
    var column = object[i].column;
    var block = object[i].block;
    var possibles = object[i].possibles;



   };

    
        // if(value === null) {
    //   for (var i = 0; i < row.length; i++) {
    //     var keyCheck = row[i];
        
    //     if(object[keyCheck].value != null){
    //       for (var i = 0; i < possibles.length; i++) {
    //         if(possibles[i] === object[keyCheck].value) {
    //           possibles.splice(i);
    //           console.log(object[1].possibles);
    //           return
    //         }
    //       };
    //     };
    // //     var possibleToRemove = object[row[i]].value;
    // //     for (var i = 0; i < possibles.length; i++) {
    // //       console.log('in third for loop')
    // //       if (possibles[i] === possibleToRemove) {
    // //         possibles.splice(i);
            
    // //       };
    // //     }
    //   };
    // }

  
  // callback(object);

}

databuilder(boardArray, findPossibles);
// printer();