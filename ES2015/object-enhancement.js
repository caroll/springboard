// same keys and values

// from
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

//to
function createInstructor ( firstName , lastName ) {
    return {
        firstName,
        lastName
    }
}

// computed property names

// from
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// to
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// instructor[favoriteNumber] or instructor[42]


// createAnimal function

function createAnimal ( species , verb , noise ) {
    return {
        species,
        verb,
        noise
    }
}

function createAnimal ( species , verb , noise ) {
    return {
        species,
        verb,
        noise,
        poke() {
          return this.noise;
        }
    }
}