const cards = document.querySelectorAll(".card");

function flipCard(){
console.log('Am I wokring?');
console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));
