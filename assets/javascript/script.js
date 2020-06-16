$(document).ready(function () {
    $(".guide-button").click(function () {
        $(".text-box").toggle("medium");
    });
});

const cards = document.querySelectorAll(".card");

function flipCard(){
this.classList.toggle('flip');
console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));
