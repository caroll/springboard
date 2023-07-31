
// Part 1
class Vehicle {
    constructor ( make , model , year ) {
          this.make = make;
          this.model = model;
          this.year = year;
    }
    honk() {
      return "Beep!!!";
    }
    toString() {
      return `The vehicle was a ${this.make} ${this.model} from ${this.year}. `;
    }
}
/*
let myCar = new Vehicle( "ford" , "ka" , 1999);

$ myCar
{
"make": "ford",
"model": "ka",
"year": 1999
}
$ myCar.honk()
$ "Beep!!!"

$ myCar.toString()
"The vehicle was a ford ka from 1999. "
*/

// Part 2

class Car extends Vehicle {
    constructor ( make , model , year ) {
        super( make , model , year );
        this.numWheels = 4;
    }
}

// Part 3

class Motorcycle extends Vehicle {
    constructor ( make , model , year ) {
          super( make , model , year );
          this.numWheels = 2;
    }
    revEngine() {
      return "VRRROOOMM!!";
    }
}
/*
$ let myBike = new Motorcycle( "ducati" , "diavel" , 2021 );

$ myBike
{
"make": "ducati",
"model": "diavel",
"year": 2021,
"numWheels": 2
}
$ myBike.revEngine()
"VRRROOOMM!!"
*/

// Part 4

class Garage {
    constructor( cap ) {
        this.vehicles = [];
        this.capacity = cap;
    }
    add( newVehicle ) {
        // I had to check the solution to see how to verify
        // if the car was a vehicle :P
        if ( !( newVehicle instanceof Vehicle ) ) {
            return "sorry, only vehicles are allowed";
        } else {
            // checks garage capacity
            if ( this.vehicles.length >= this.capacity ) {
                return "the garage is full";
            } else {
                this.vehicles.push( newVehicle );
                return "the vehicle was parked";
            }
        }  
    }
}



