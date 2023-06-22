
/*
Write a function called countdown that accepts a number as a parameter and 
every 1000 milliseconds decrements the value and console.logs it. Once the 
value is 0 it should log “DONE!” and stop.
*/

function countDown ( num ) {
    counter = num;
    console.log("number:" + num );
    const callback = function sub(){
        counter--;
        if ( counter > 0 ) {
            console.log("number now: "+ counter);
        } else {
            clearInterval(intervalID);
            console.log("Done!");
        }
    }
    const intervalID = setInterval( callback, 1000 );
}

let counter = 0;
// COUNTDOWN
countDown(3);

function randomGame () {
    let count = 0;
    let rNum;
    const callback = function add(){
        try {
            rNum = getRandom( 0 , 1 , 2 );
        } catch(err) {
            console.log("ooops" + err );
        }
        if ( rNum ) {
            console.log("the number is->"+ rNum);
            if ( rNum > 0.75 ) {
                clearInterval(intervalID);
                console.log( rNum + " is greater than 0.75. Number of tries ->" + count );
            } else {
                count++;
            }
        }
    }
    const intervalID = setInterval( callback, 1000 );
}

function getRandom ( min, max , dec ) {
    let randomNumber;
    let temp;
    // if should be rounded/cut short
    if ( dec ) {
        temp = ( Math.random() * ( max - min ) + min ).toFixed( dec ) ;
        randomNumber = parseFloat( temp );
    } else {
        // I had to cheat and see how to get a random float in js, had no idea :]
        randomNumber = Math.random() * ( max - min ) + min ;
    }
    return randomNumber;
}

// RANDOMGAME
randomGame();