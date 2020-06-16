$(document).ready(function () {
    $(".guide-btn").click(function () {
        $(".text-box").toggle("medium");
    });
    $(".restart-btn").click(function () {
        location.reload();
    });
});

const cards = document.querySelectorAll(".card");

function flipCard(){
this.classList.toggle('flip');
console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));
