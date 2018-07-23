/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
let deck = document.querySelector('.deck');
deck.addEventListener('click', flip);

 function flip(evt) {
   if (evt.target.nodeName === 'LI') {
     evt.target.classList.add('open');
     evt.target.classList.add('show');
   }
   addCardsList();
 }

let cardsOpen = document.getElementsByClassName('open');
let cardsOpenList = [];

function addCardsList (){
  cardsOpenList.push(cardsOpen);
  checkForTwo();
//  console.log(cardsOpenList); WORKS
}

function checkForTwo() {
  if (cardsOpenList.length === 2) {
//    console.log('equal to two');
    checkForMatch();
  } else { 
//    console.log('wait for it to be equal to two');
  }
}

function checkForMatch() {
  let cardOne = cardsOpen[0].childNodes[1].className;
  let cardTwo = cardsOpen[1].childNodes[1].className;
  if (cardOne === cardTwo) {
    //call another function
    console.log('we have a match');
  } else {
    //call another function
    console.log('try, try, try again!');
  }
}