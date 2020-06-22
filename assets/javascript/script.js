/** Array object list containing html elements values 
of cards to be picked out and looped through later when creating a HTML through JS
This cuts down on html element coding and an easier way to add more card characters at a later date if needed
with little coding inserts.*/
let cardConfig = [
	{
		name: 'ban',
		imageSrc: 'ban.jpg',
	},
	{
		name: 'diane',
		imageSrc: 'diane.jpg',
	},
	{
		name: 'elizabeth',
		imageSrc:'elizabeth.jpg'
	},
	{
		name: 'escanor',
		imageSrc: 'escanor.jpg'
    },
    {
		name: 'merlin',
		imageSrc: 'merlin.jpg'
    },
    {
		name: 'hawk',
		imageSrc: 'hawk.jpg'
    },
    {
		name: 'king',
		imageSrc: 'king.jpg'
    },
    {
		name: 'meliodas',
		imageSrc: 'meliodas.jpg'
    },
    
];
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
$(document).ready(function () {
    /* jquery code*/
    $(".guide-btn").click(function () {
		$(".text-box").toggle("medium");
	});
	$(".restart-btn").click(function () {
		location.reload();
    });
    /*end of JQuery code*/

	let generatedCardsHtml = '';
	cardConfig = [...cardConfig, ...cardConfig];
	cardConfig.forEach(card => {
	cardConfig.sort(() => Math.random() - 0.5);
		});
	cardConfig.forEach(eachCard => {
		const cardHTML =
		`
		<div class="card" data-name="${eachCard.name}">
		<img class="card-front card-face" src="assets/images/${eachCard.imageSrc}">
		<img class="card-back" src="assets/images/cardback.jpg">
		</div>
		`;
		generatedCardsHtml += cardHTML;
	});
    document.getElementById('game-container').innerHTML = generatedCardsHtml;
		/**variables of my game to assign values to objects to invoke and store functions**/
		const cards = document.querySelectorAll(".card");
		let hasFlippedCard = false;
		let lockBoard = false;
		let firstCard, secondCard;
		let matches = 0;
		let winner = document.querySelector(".overlay-text");
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
        /**function to recognise when the cards have all been matched to display the winner screen
         * invites players to start a new game if they wish.
         */
			function congratulations() {
				winner.classList.add("visible");
			}
		console.log(cards);
			cards.forEach(card => card.addEventListener('click', flipCard));
	})