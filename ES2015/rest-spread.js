
// from
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

// to
function filterOutOdds (...args) {
    return args.filter( v => v % 2 === 0  );
}



// Write a function called findMin that accepts a variable number of 
// arguments and returns the smallest argument.
// I was doing like the function above when I realized that it could be even smaller. :)
//to
const findMin = (...args) => Math.min(...args);

// mergeObjects
const person = [{name: 'jane'},
{name:'bob'},
  {name:'alice'}];
const lostPerson = [{name: 'nell'},
{name:'wally'},
  {name:'ryan'}];
const mergeObj = (ob1,ob2) => ([...ob1 ,...ob2 ]);
mergeObj(person,lostPerson);

// double and return args


// Slice and dice

