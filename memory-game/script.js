const gameContainer = document.getElementById("game");
let counter = 0;
let card1 = null;
let card2 = null;
let stopClick = false;
let attempts = 0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
let shuffledColors = shuffle(COLORS);
document.addEventListener("DOMContentLoaded", (event) => {
  createDivsForColors(shuffledColors);
});
// create divs for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}
// handles the click on the cards
function handleCardClick(event) {
  // if 2 cards were already flipped
  if ( stopClick ) {
    return;
  }
  // if the current card was already flipped
  if ( event.target.classList.contains("flipped") ) {
    return;
  }
  let curCard = event.target;
  curCard.style.backgroundColor = curCard.classList[0];
  // https://en.wikipedia.org/wiki/Short-circuit_evaluation
  if ( !card1 || !card2 ) {
    curCard.classList.add("flipped");
    card1 = card1 || curCard;
    card2 = curCard === card1 ? null : curCard;
  }
  //console.log( curCard ); // FIXME
  if ( card1 && card2 ) {
    stopClick = true;
    attempts++;
    let card1Class = card1.className;
    let card2Class = card2.className;
    //console.log( card1Class + " - " + card2Class ); // FIXME
    if ( card1Class === card2Class ) {
      // IT MATCHES!
      counter += 2; // counting cards :)
      // cleaning up vars
      stopClick = false;
      card1.removeEventListener( "click" , handleCardClick );
      card2.removeEventListener( "click" , handleCardClick );
      card1 = null;
      card2 = null;

    } else {
      // IT DOESN'T MATCH - cleaning up vars
      setTimeout(function() {
        card1.style.backgroundColor = null;
        card2.style.backgroundColor = null;
        card1.classList.remove( "flipped" );
        card2.classList.remove( "flipped" );
        card1 = null;
        card2 = null;
        stopClick = false;
      }, 3000 );
    }
  } 
  if ( counter === COLORS.length) {
    setTimeout( function() {
      alert(`You finished the game in ${attempts} shots!`);
    } , 2000 );
  }
}
// function to shuffle an array
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
