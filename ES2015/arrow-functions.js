
//1 map callback

//from
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

  // to
const double = arr.map( val => val * 2 );

// 2 

//from
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

// to
// check with Peter if there is a problem in the way that it is different
// from the solution
const x = numbers.filter( val => val % 2 === 0 ).map( num => num ** 2 );