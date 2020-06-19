/**
 * jquery code. This section invokes the document to be ready.
 * guide button code in js is used to say when you click on the button 
 * the intructions will drop down at a medium pace.
 * Restart button is for the game page to reload and refresh the page 
 * if players want to restart their game if they are not happy with their score**/

$(document).ready(function () {
	$(".guide-btn").click(function () {
		$(".text-box").toggle("medium");
	});
	$(".restart-btn").click(function () {
		location.reload();
    });
    

/**variables of my game to assign values to objects to invoke and store functions**/
const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matches = 0;
let winner = document.querySelector(".overlay-text");
let flip = {
	flipCounter: document.getElementById("turns-counter"),
	flipCount: 0,
	timesFlipped: 0,
};
let score = {
	scoreCounter: document.getElementById("score"),
	scoreCount: 500,
	scoreDeducted: 0,
}


/**function for flipping the card. If you have flipped one card it
 should not lock the board to allow you to continue a second click
 if there is a match then the board will not lock as well
 if there isnt a match then the board will lock until there is a timeout function performed to allow 
 the logic to remain in place and not crash.
 contains code for score depletion for each flip the player has performed.
 contains code for each time a player flips a card it increases the number by one**/
function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;
	flip.flipCount++;
	flip.flipCounter.innerText = flip.flipCount;
	flip.timesFlipped++;
	score.scoreCount--;
	score.scoreCounter.innerText = score.scoreCount;
	score.scoreDeducted--;

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


// function to check for the match. If the first card value data = second value card data they will match
//if no match then unflip the cards
function checkForMatch() {
	if (firstCard.dataset.name === secondCard.dataset.name) {
		matches += 1;
		if (matches === 8) {
			congratulations();
		}
		disableCards()
	} else {
		unFlipCards()
	}
}
/**function to remove event listener if cards have matched. 
Meaning when cards match they will be disabled to turn back over or be able to be clicked on again
They will face turned up for the rest of the game until completion or a game reset**/
function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	checkBoard();
}
/**function to set a time out if cards do not match.
 This means cards will turn back around after a set amount of time.
 **/
function unFlipCards() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		checkBoard();
	}, 1000);

}

function checkBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

/**iife (immediately invoked function expression. Means the function will be invoked right after its definition.
 * This is used so as soon as the page loads the game will shuffle the cards at random
 *  meaning the player will not have the same board each time**/
(function shuffleCards() {
	cards.forEach(card => {
		let shuffleRandom = Math.floor(Math.random() * 16);
		card.style.order = shuffleRandom;
	});
})()

/**function to invoke overlay text when player has matched all the cards together in pairs */
function congratulations() {
	winner.classList.add("visible");
}


cards.forEach(card => card.addEventListener('click', flipCard));
});