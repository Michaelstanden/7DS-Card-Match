$(document).ready(function () {
    $(".guide-btn").click(function () {
        $(".text-box").toggle("medium");
    });
    $(".restart-btn").click(function () {
        location.reload();
    });
});

const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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
     
 secondCard = this;
     checkForMatch();
 }



function checkForMatch() {
 if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards()
} else {
 unFlipcards()
}   
}

function disableCards() {
     firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click' , flipCard);

    resetBoard();
}

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

cards.forEach(card => card.addEventListener('click', flipCard));

