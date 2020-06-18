# 7DS Card Match

[7 DS Card Match]( https://github.com/Michaelstanden/7DS-Card-Match.git) is an interactive card matching game with a popular Japanese anime theme.

I have created this game to engage users of all ages, especially those who enjoy the 7 Deadly Sins Anime. It has been designed so that it is easy to play, and is fully responsive to the users a range of devices, whether that be android, IPhone or various tablets and laptops.

The use of flips, scoring system and bright colour scheme has been designed to be visually appealing and physically engaging and stimulate users as they play the game.

I have used HTML, CSS, and JavaScript to build this game which will form part of my portfolio.



## Table of Contents

1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Design choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Technologies Used**](#technologies-used)

3. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features To Be Implemented**](#features-to-be-implemented)

4. [**Testing**](#testing)
    - [**Code Validation**](#code-validation)
    - [**Manual Testing**](#manual-testing)

5. [**Deployment**](#deployment)
    - [**To Run Locally**](#to-run-locally)

6. [**Credits**](#credits)
    - [**Images**](#images)
    - [**Code Credits**](#code-credits)
    - [**Learning Resources**](#learning-resources)
    - [**Acknowledgements**](#acknowledgements)

7. [**Disclaimer**](#disclaimer)

## __UX__

### User stories

As a user:

- I want the landing page to be an impact when you land. Big images, bright colours and bold texts to set the standard for the rest of the website and will draw people in (including myself whether or not I wish to play this game).

- I want to be able to navigate around the website intuitively and not have to search for functions, buttons or what to do or where to go. A large and visual button for start and instructions in the middle of the screen I think makes it easy to do this.

- I want to access the game with little effort and have tutorial information available at ease.

- I want to be able to restart the game at any point without having to return to the landing page to do so.

- I want to be able to keep track of the amount of flips it has taken me to complete the game & the score I achieved to do this to test my memory skills and set a margin to improve on the more I play.

- I want the card layout to be shuffled so that no two games are alike making it a genuine experience for myself or other users if there are multiple play through’s.

## Design Choices

### Colours

- **Text and Buttons** - I decided to use ``#ffe603`` (yellow) as the main text colour for any text and buttons with ``#fc1212`` (red) as a shadow to give a depth and gothic feel to the text.
It also stood out well against the ``#030177`` (navy blue gradient) background and images used throughout the game. The colour scheme matches the 7 Deadly Sins colour scheme so will appeal to users who are already aware of this anime, as well as its natural stand out colour scheme to draw in new users.

- **Button backgrounds, Footer, Overlays** - I decided to use ``#rgba(60,60,60,0.85``(Charcoal) which is a translucent charcoal colour for these elements so it aids in the readability of the text and does not get lost amongst the page full of colours, and images.

- **Card** - I decided to use images from Google for the card fronts and backs, I found ones that had a white border on them already so they would stand out well against the game background colours whilst still complimenting the overall design style of the game.

### Fonts

- [**Germania One **](https://fonts.google.com/specimen/Germania+One?query=germania+one) - I used this font for the site headers, buttons, instructions text and general text included in footers as well. I felt that it was the closest style of font I could find to the 7 Deadly Sins type font and style they use for the anime.

### Wireframes

- The wireframes for the initial layout of the website were drawn by me and can be found [here](https://github.com/Michaelstanden/7DS-Card-Match/tree/master/assets/wireframes).

- The wireframes include a design layout for Desktop, Tablet - portrait and Mobile - portrait.

- The colour scheme can be seen at the side used with pencils.

#### Variations Between Wireframes and Final Product

During the styling phase of the website I strayed from the the original wireframe design as My mentor Akshat said it would make more sense to have a landing page as well as a game page, rather than stick everything into one page; after viewing it live I felt that this idea accentuated the overall website experience as it give a clear page to land on and follow on from there to the game.
 
##### Landing Page

- The original mock-up was not included, however there was a banner at the top of the page that is similar to what the final outcome has been.


#### Game Page 

-	This stayed virtually the same, except there was no banner on the top anymore as this was moved to the landing page. I wanted 16 cards in total so it could represent a good range of characters in the anime, as well as provide more of a challenge. I felt 16 cards also was the right amount to fit on a page when trying to scale for different devices.

## Technologies Used

1. [HTML](https://en.wikipedia.org/wiki/HTML) - This was used for the overall structure of the website.

2. [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - This was used for the overall and bespoke styling of elements on the website.

3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - This was used to create overall logic of the game as well as controlling the modals, audio and buttons.

4. [Google Fonts](https://fonts.google.com/) - I used Google Fonts to obtain the fonts used on the website which are "Indie Flower" and "Spicy Rice".

5. [GitHub](https://github.com/) - I used to store my repository for the project and record all my commits.

6. [GitHub Pages](https://pages.github.com/) - I used to deploy my website.

7. [Google Images](https://www.google.com/) - I used this to get the images for the cards, card backs and banner.


8. [GitPod] – Used to write my code.

9. [JQuery](https://jquery.com/download/) – used for some basic JavaScript coding.

## Features

### Existing Features

Landing Page

- The landing page is impactful, bold and is clean. There is a strong image that grabs attention, with a start button in complementing bold colours as well as an instructions button to aid the user as to what to do next.

- The simple approach was designed to not overload the user with various buttons and ways to navigate when they visit the site and they can play the game immediately.

- When the user clicks on a button, there is a scale up effect which aids in the recognition that they have clicked the buttons on the site.

Navigation Buttons

- The start button on the page contains the link to the game when clicked they are transported away from the landing page and onto the game page.

- The instructions button at the landing page offer a short paragraph of how to play the game and it’s objectives. It is hidden on the landing page to aid a clean look. It can be accessed when clicked on and hidden away again when clicked again.

- I decided on using text for the buttons. However I realise this might limit users who can’t speak English as a first language. Next time I might use images/ icons to suggest start functions and rules functions.

- The restart button on the game page was designed to enable users to refresh the page at any point in their game in case they were not happy with their score or had a misplay.   

- The quit button was designed so people could quit the game completely and come back to the landing page if needed.

- These options work through the use of HTML, CSS and JQuery code.

Turns Function

- The turns function is designed to ensure players are aware of how many times they have flipped the card. A way to keep check on their progress and a measure to have them aim for a lower number on play through’s.

Score Function

- The score Function starts to deplete from 500 by 1 value after the user flips a card. Another way to entice players into seeing what their overall score was after the game finishes.


Game Area

- The game area has a responsive design which will adapt to the device the user is playing on and the orientation of the device.

- In the bottom right corner of the game area, there is a restart button that the user can click on to restart their game and reset the score and turns and reshuffle the cards.

- Upon game start/restart, the cards are all placed facedown and shuffled.

Game cards

- The game cards consist of up to 8 unique images that I obtained through google images. These images were resized so they all had a consistent size and would be contained correctly within the cards across all media devices.

- When a user clicks on a card that is facedown, the card face is revealed with a 3D flip effect.

- Upon the user selecting two cards, if both cards match they stay face up, otherwise the facedown class is re-applied to the card.

### Features To Be Implemented

- I want to implement audio to the game and make sounds for when a user clicks on the card, gets a match or wins the game audio will play accordingly. I would also like the theme of the anime playing at a reduced volume in the background to aid the sense of being associated with the anime.


## Testing

### Code Validation

All code written has been thoroughly validated and passed through the following online validators:

- HTML - All code was run through the [W3C HTML Validator](https://validator.w3.org/) to ensure it was valid code and no errors were made.

- CSS - All styling was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure it was valid and no errors were made.

- JavaScript - All my script was run through the [JSHint](https://jshint.com/) validator and no errors were found.

### Manual Testing

You can view the testing done in the [test.md](https://github.TESTING) where I have written the various tests and methods I have performed.

## Deployment

I developed this project using [Gitpod](https://github.com/). With regular commits to show step by step progress of the site.

The live version of this site is hosted using GitHub Pages and is deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To deploy 7DS card Match from its [repository in GitHub](https://github.com/Michaelstanden/7DS-Card-Match), I completed the following steps:

1. Log into GitHub
2. From the list of repositories, select 7DS-Card-Match.
3. Click on the settings button located just below the Fork option.
4. Scroll down the new page to GitHub Pages.
5. Select Master Branch from the dropdown menu.
6. After selecting Master Branch, the page will refresh and 7DS-Card-Match is deployed.
7. If you scroll back down to the GitHub Pages section after the page refreshes, you can grab your live link to your deployed site.

### To Run Locally

If you wanted to run this project locally and not use GitHub Pages, you can follow these steps:

1. Go to the repository for [**7DS Card Match**](https://github.com/Michaelstanden/7DS-Card-Match).
2. Below the repository name, you will see a green button with the text **Clone or Download**.
3. Click on this button and a box will appear called **Clone with HTTPS**.
4. Copy this clone URL for the 7DS Card Match repository.
5. In your local IDE, open **Git Bash**. Please check that **Git** has been installed in your IDE.
6. Change the **current** working directory to the location where you want the cloned directory to be made.
7. Type ``git clone`` and then paste in the URL you took from the **Clone with HTTPS** button.

8. You can cut ties with the original GitHub repository by typing in:

    - ``git remote rm origin``

## Credits


### Images

1. The images used in the game are from [Google Images](https://google.com/) which are all royalty free and available for non-commercial use:
**Which is relevant to this as this was created for educational uses only**

### Code Credits

1. The shuffle method was obtained from [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use-data-attributes).

2. The idea on how get the 3D perspective in CSS for the card flips provided by [Desandro](https://3dtransforms.desandro.com/card-flip).

3. The use of Grid spacing in CSS by [CSS Tricks](http://css-tricks.com/snippets/css/complete-guide-grid/).
4. The further reading of Javascript in general [Mozilla MDN](https://developer.mozilla.org/en-US/
 

### Acknowledgements

A special thanks to:

- My Code Institute Mentor, [Akshat Garg] for his support during the project.
- Code Institute Slack Community and support at Code Institute.

### Learning Resources

- Throughout my journey of creating this site, I have really tried to push my knowledge not only in JavaScript but also CSS and HTML continuously; I used the following resources to help me:

- [Code Institute](https://codeinstitute.net/).

- [Codecademy](https://www.codecademy.com/).

- [Plurasight](https://www.pluralsight.com/).

- [w3schools](https://www.w3schools.com/).

## Disclaimer

This site has been created entirely for **educational purposes** only and is not intended to be used in any other capacity.
