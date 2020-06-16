$(document).ready(function(){

});

const cards = document.querySelectorAll(".card");

function flipCard(){
this.classList.toggle('flip');
console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));
