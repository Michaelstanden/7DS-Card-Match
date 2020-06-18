$(document).ready(function () {
    $(".guide-btn").click(function () {
        $(".text-box").toggle("medium");
    });
    $(".restart-btn").click(function () {
        location.reload();
    });
});

const cards = document.querySelectorAll(".card");
//variables of first card to be clicked and value or cards, 
//second card to be clicked and values and if a card has been flipped
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matches = 0;
let winner = document.querySelector(".overlay-text");


//function to check if the card flipped should lock the board on a no match or should play on and match
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

this.classList.add('flip');

 if (!hasFlippedCard) {
     //first time a player has clicked a card
     hasFlippedCard = true;
     firstCard = this;
     return;
 } 
   //second card clicked  
 secondCard = this;
     checkForMatch();
 }


// function to chec for the match. if the first card value data = second value card data they will match
//if no match then unflip the cards
function checkForMatch() {
 if (firstCard.dataset.name === secondCard.dataset.name) {
     matches +=1;
     if(matches === 8){
         congratulations();
     }
    disableCards()
} else {
 unFlipcards()
}   
}
//function to disable cards if they have matched.
function disableCards() {
     firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click' , flipCard);

    resetBoard();
}
//function to set a time out if cards do not match so they are allowed to be flipped over for the player.
function unFlipcards() {
    lockBoard = true;

    setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
}, 1000); 

}

function resetBoard(){
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards(){
    cards.forEach(card => {
        let shuffleRandom = Math.floor(Math.random() * 16);
        card.style.order = shuffleRandom;
    });
})()
//iife (immediately invoked function expression. Means the function will be invoked right after its definition.

function congratulations() {
        winner.classList.add("visible");
        onclick.location.reload();
    }
        
        

cards.forEach(card => card.addEventListener('click', flipCard));

