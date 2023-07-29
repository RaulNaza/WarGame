//My War Game


//New Player Class takes in name, hand and score in constructor to house these variables.
//Player name will be assigned
//Player hand will be used to push values once the deck has been shuffled and dealt.
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
//The describe method will be used to display a string declaring the winner thorugh the console.
    describe() {
        console.log(`${this.name}, you won with a score of ${this.score}!`);
    }
}

//This Deck class will take in an arrary of cards to be drawn from.
class Deck {
    constructor() {
        this.drawFrom = [];
    }
//This method will shuffle the deck using the Fisher-Yates Algorithm to randomize
    shuffleDeck() {
        // Use the Fisher-Yates algorithm to randomize
        for (let i = 0; i < this.drawFrom.length; i++) {
            let temp = this.drawFrom[i];
            let j = Math.floor(Math.random() * this.drawFrom.length);
            this.drawFrom[i] = this.drawFrom[j];
            this.drawFrom[j] = temp;
        }
    }
//This method will create a deck by pushing a new instance of the Card Class at i variable. This pushes numbers from 2 to 13; 13 being the Ace instead of 1. The nested loop will iterate 4 times
//to make up a full deck.
    createDeck() {
        let loops = 4;
        while (loops > 0) {
            let set = 13;
            for (let i = 2; i <= set; i++) {
                this.drawFrom.push(new Card(i));
            }
            loops -= 1;
        }
    }
}

//The Card class will be used to create an instance and a new card with its respective number
class Card {
    constructor(number) {
        this.number = number;
    }
}
// The Game class will run all the methods needed for the game to run with its constructor holding an array of player. Only 2 players in this case
class Game {
    constructor() {
        this.players = [];
    }
// this method will create 2 players and a new instance of Deck which will be used for the game.
    start() {
        this.player1 = this.createAPlayer('Player 1');
        this.player2 = this.createAPlayer('Player 2');
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.dealCards(deck);
        this.runGame(this.player1, this.player2);
    }
    
//this method creates a new instance of Player and adds it to the players array
    createAPlayer(name) {
        let player = new Player(name);
        this.players.push(player);
        return player;
    }

//this method iterates through the drawFrom array and deals each player a card. In this case even indices of the array goes to player1
//odd indices of the array go to player2 
    dealCards(deck) {
        let cardDeck = deck.drawFrom;
        for (let i = 0; i < cardDeck.length; i++) {
            if (i % 2 === 0) {
                this.player1.hand.push(cardDeck.shift());
            } else {
                this.player2.hand.push(cardDeck.shift());
            }
        }
    }
    
//takes in each players hand at the first index and runs the method.
//whichever hand is greater gets a 1 added to their player score.
    compareHands() {
        const player1Card = this.player1.hand.shift();
        const player2Card = this.player2.hand.shift();
    
        if (player1Card.number > player2Card.number) {
            this.player1.score += 1;
        } else if (player2Card.number > player1Card.number) {
            this.player2.score += 1;
        }
    }

//test for both players hands to have enough values. If true the compareHands method will run.
//once the while loop ends the string will be printed to the console using a template literal.
    runGame(player1, player2) {
        while (player1.hand.length > 0 && player2.hand.length > 0) {
            this.compareHands();
        }
        console.log(`
        Player 1: ${player1.score}
        Player 2: ${player2.score}\n`);
        if (player1.score > player2.score) {
            player1.describe();
        } else if (player2.score > player1.score) {
            player2.describe();
        } else {
            console.log("It's a tie!");
        }
    }
    
}

let warGame = new Game();
warGame.start();


//Unit test
function multiply(a,b) {
    return a * b;
}