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
     console.log({hasFlippedCard, secondCard});
 }

}

cards.forEach(card => card.addEventListener('click', flipCard));
