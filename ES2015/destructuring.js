/* Destructuring */

// object destructuring 1
//What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// object destructuring 2
//What does the following code return/print?
{
    "yearNeptuneDiscovered": 1846,
    "yearMarsDiscovered": 1659
  }
// object destructuring 3
// What does the following code return/print?
// a. "Your name is Alejandro and you like purple"
// b. "Your name is Melissa and you like green"
// c. "Your name is undefined and you like green"

// array destructuring 1
// What does the following code return/print?
// a. Maya
// b. Marisa
// c. Chi

// array destructuring 2
// What does the following code return/print?
// a. raindrops on roses
// b. whiskers on kittens
// c. ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

// array destructuring 3
// What does the following code return/print?
// [ 10, 30, 20 ]

// ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  let { numbers: { a, b } } = obj;

// array swap
[ arr[0] , arr[1] ] = [ arr[1] , arr[0] ];

// raceResults
const raceResults = ([first,second,third, ...rest]) => ({first,second,third, rest});
x = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
console.log( x );
/*
{
    "first": "Tom",
    "second": "Margaret",
    "third": "Allison",
    "rest": [
      "David",
      "Pierre"
    ]
}
*/