var databuilder = require('./arraybuilder.js')
var printer = require('./boardprinter.js')
var boardString = process.argv[2];
var boardArray = boardString.split('');

function rowChecker () {

}

function findPossibles (object, rowValues, columnValues, blockValues, callback) {
 
   
console.log(object);
    
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