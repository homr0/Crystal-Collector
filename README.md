# Crystals Collector!

## Instructions

You will be given a random number at the start of the game.

There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

You win the game by matching your total score to random number, you lose the game if your total game score goes above the random number.

The value of each crystal is hidden from you until you click on it.

Each time when the game starts, the game will change the values of each crystal.

## Developer Diary

This Crystal Collector game is played like a game of blackjack, only with the number limit being randomized instead of merely 21. Additionally, each of the four crystals has to have a randomized value that is added to the player's total. This was implemented during the creation of the game via jQuery click events.

Since this is a fairly quick game, the website keeps track of how many games that the player has finished (whether they win or lose), through a simple JavaScript counter in the program. Finally, each time the game is completed, the total to be reached and the crystal values are set through a random number generator, after which the user can play again.