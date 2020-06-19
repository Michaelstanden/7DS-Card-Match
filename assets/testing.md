# 7DS-Card-Match Testing

The code used for 7DS Card Match was regularly tested at each stage and thouroughly with manual testing on Dev tools in Chrome and my mobile device (android).

## Table of Contents

1. [**Code Validation**](#code-validation)

2. [**Testing Against User Stories**](#testing-against-user-stories)

3. [**Manual Testing**](#manual-testing)
    - [**Responsive Design Testing**](#responsive-design-testing)
        - [**Overview**](#overview)
            - [**Landing Page**](#landing-page)
            - [**Game Area**](#game-area)

    - [**Additional Testing**](#additional-testing)

## Code Validation

All code written has been passed through the following online validators:

- HTML - All code was run through the [W3C HTML Validator](https://validator.w3.org/) to ensure it was valid code and no errors were made.

- CSS - All styling was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure it was valid and no errors were made.

- JavaScript - All my script was run through the [JSHint](https://jshint.com/) validator and no errors were found.

## Testing With Users And Manual Testing

The below goes through my process of testing through dev tools and playing the game alongside family members trying the game out to try break it, and play through normally to ensure everything works.


### Responsive Design Testing

During the development and testing phase of the site, I used Google Chrome and Google Dev Tools to test the layout as I built my code and used the various screen sizes to ensure that it displayed correctly and that elements of the size displayed correctly and easily viewable by the user.

All testing was performed using:

- Google Chrome
- Mobile Android 
- Desktop - I tested the display on all different screen sizes.
- Mobile Phones - All emulated devices offered in Google Dev Tools as well as physical devices such as Huawei P30Lite.
- Tablets - Emulated on Dev tools in google chrome.

#### Overview

This game was created to be responsive to all user media devices such as mobile phones, tablets, desktops. However, for best functionality a desktop, tablet or laptop provides better user experience.

To make sure the site and game remained responsive, I tested the layout every time changes were made to the code inputs on the various screen sizes within the Chrome Dev tools. Corrected the styling of the elements and added Media Queries so that the design would adjust to the device being used. 

The overall site was designed using HTML and CSS coding as I wanted the challenge to broaden my knowledge of CSS grid layouts and a card game fitted this task perfectly.

##### Landing Page

I laboriously tested the layout of the landing page throughout the development of the project and after each edit, I made sure that the layout and responsiveness of the website worked and looked appealing on all devices.

- I ensured that the text, buttons and images on the landing page were visible and had great readability. This was achieved with the colour scheme as well as text boxes to encapsulate certain elements of text in buttons and instructions. I also made sure this was again readable and clear across multiple devices in Devtools and on my mobile.

- Using the grid system in CSS ensured that my media queries were quite short and comprehensible. It made using media queries a lot easier across a lot of devices.


  - Bug Issue - ** Instruction Button **

    - The Instruction button would sometimes hide and be visible and the clicks would glitch. Using CSS to target the button for a smoother transition and JQuery to hide the text on page load and slide in from the side fixed this issue.


- Bug Issue - **Excess space between restart and quit buttons and footer**

  - The space was only troublesome on some devices in Dev tools to the user as the footer would jump into the buttons or leave no gap on their current viewport.

- Fix Applied:

  -The issue was resolved using CSS and a div element with a class of spacing to style a consistent space across all devices.

- Bug Issue - **JavaScript code and JQuery code was not connecting**:

  - When running some initial code for my Cards I saw that it wouldn’t register to the console or log if I did a console log. To test the code I ran it manually through the console log in dev tools and found the code worked.
.

- Fix Issue:

  - In order to fix this I changed the placing of my JS files in the HTML document and ensured they were linked correctly.

#### Game Area

The game area being the main feature and purpose of the site I meticulously tested that each function displays and works correctly on various platforms as well as making sure the game play is smooth and easily viewable by the user.
When writing the code out manually in the console in dev tools, I can see that the first test is working. In this test I wanted to see if the data-name I have given to my images could be passed as a value. When a user clicks the card it will tell the console which value has been clicked. I wanted to do this to ensure that values can be matched later in the JavaScript and if values do not match then they will flip back over. I also wanted to see what the this. Keyword was representing so I console logged it to make it clear. [here](img)
Next I wanted to create a flip function in my game and test that the cards were being recognised by the console and that the flip function would activate on a click of a card. [here] (img2)
In this test I wanted to set the function to test the game and register when the player clicked the first card or when the player clicks the second card and if the console would recognise this. This would make it possible to ease in a matching logic function with this later. I set two variables. One being hasFlippedCard and another one holding the value of firstCard and secondCard. 
When setting these I then updated my flipCard function and changed the toggle class to add class instead.
function flipCard(){
this.classList.add('flip');
 if (!hasFlippedCard) {
     //first time a player has clicked a card
     hasFlippedCard = true;
     firstCard = this;

     console.log({hasFlippedCard, firstCard}); 
 }

I then created a condition. If has flipped card is false then it means the first time a player a clicked a card. Then I set the hasFlippedCard to be ture, then the firstCard as the value of this. I wanted to console.log these to see when I clicked on the card I could see what was being triggered in the event by the console. When clicking on the card It triggered as it should the first time and when flipping all other cards over it did not trigger again. This worked in showing the console that when the player clicks on a card first it recognises this and stores it.
I then did the same process for the else statement to target the second card flip
[here](assets/images/img3.png)

[here](assets/images/img4.png)
Logged both of these to the console to see if the first card and second card on click will be registered. It was.
[here](assets/images/img5.png)
After testing this I needed to look at matching my cards and how to access the values I put in the dataset values in my html before. Here I console logged the firstcard and seconcard variables with the data.set.name command. This then let me see when I clicked on two cards what the value of those cards were.
[here](assets/images/img6.png)
After logging this I went to create a match function. Within this I would declare that if firstcard.dataset.name === secondcard.dataset.name then we would need to remove the eventlistener for click and flip from these matched pair values so that they can be stored and not be able to be clicked on and matched again.
[here](assets/images/img7.png)
The second stage I had to do was if it wasn’t a match, I had to remove the class list flip to prevent the non matched pair remaining flipped over. However when doing this I found that the second card wouldn’t flip over if it wasn’t a match.
[here](assets/images/img8.png)
After researching I found on MDN that you could add a timeOut to this to ensure that there is a delay to ensure we can see the card flip before it calls the function. I added a delay to the end of the function to see could see if the card would flip, and if not a match turn back over.

After playing the game I discovered that if I flipped over a pair that didnt match and I tried to flip another card before the timer has flipped back then I would have broken my logic and the cards would remain turned over even when they did not match. I had to create a variable that let me lock the board when cards were being turned over. The variable allowed me to lock the board if the cards did not match meaning that until the function of the settimeout was complete we could not turn over another card, meaning my logic would not break. If I set the lockboard function to be true in the checkformatch function then the board would allow me to continue and click cards after this again.

Another bug I found in the game when playing is if I double clicked on a card it would say the match was true and disable my logic again meaning the game would break. I had to put in a condition in the beginning of my flipcard function to allow this. 

Next mission was to then create a way to shuffle my cards on the page load to ensure that the game was able to be played correctly and not just pairs side by side. I had to research a way to find how to give the cards a random value number after already giving them a dataset. I found flexbox property called order, a flex item property that defaults to 0 which means that every flex item belongs to the same group, and then they will be grouped by source order. If you assign a different integer to the order property items will get ordered first by ascending order according to the value in the order property and then source order. So to shuffle the cards I had to generate a random number between 0-15 (because I have 16 cards) and assign to each one of our cards

              To make a winner page when the game was completed I had to define a variable of let matches = 0;
from there I added matches into my checkForMatch function and incremented the value by 1 every time we got a match. This will now be used to trigger the event of winning the game when the value reaches 8, as there are 16 cards, 8 pairs.
Img9
After this I went to use a function of a pop up screen with overlay-text in my html to appear on completion of the game. 
This would then be able to disappear and reset the game on a click which I put in the function of the button html element. 
After this I needed to register the turns counter so added turns as a variable set to 0; as I did with matches. I then nested this is flipCard function so every time a card would flip it would increment the turn but 1. I console logged this to see if it worked.
[here](assets/images/img10.png)

Now I needed to target the turns element within the js file and add a function so that whenever the turns increases by 1 it shows in the turns counter at the top of the page. I had difficulty with this in particular. As the code I used originally would only target the turns element on the screen with a Click. This meant that when the user clicked on the turns counter it would increase by one. I needed to find a way to target this into my flip card function so that when a player flipped a card the turn would increase by one. My result was I created an object variable for flips and score and put these variables into the flip card function.
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

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    flip.flipCount++;
    flip.flipCounter.innerText = flip.flipCount;
    flip.timesFlipped++;
    score.scoreCount--;
    score.scoreCounter.innerText = score.scoreCount;
    score.scoreDeducted--;

### Additional Testing

I asked my family to try the game out on the laptop and phone devices and they could not find errors within the game or the responsiveness of the site.

