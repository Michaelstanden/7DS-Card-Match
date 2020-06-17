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
let firstCard, secondCard;

function flipCard(){
this.classList.add('flip');
 if (!hasFlippedCard) {
     //first time a player has clicked a card
     hasFlippedCard = true;
     firstCard = this;
 } else {
     hasFlippedCard = false;
     secondCard = this;
     checkForMatch();
 }

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
}

function unFlipcards() {
      setTimeout( ()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}, 1000); 
}

cards.forEach(card => card.addEventListener('click', flipCard));
