//War Card Game

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.
    }
}

class Deck {
    constructor(){
        this.discard = [];
        this.drawFrom = [];
    }

    shuffleDeck(cards){
        //Use the Fisher-Yates algorithym to randomize
        for (let i = 0; i < cards.length; i++){
            let temp = cards[i];
            let j = Math.floor(Math.random() * cards.length);
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    createDeck(){
        let set = 13;
        for (let i = 2; i <= set; i ++){
            this.drawFrom.push(new Card(i))
        }
    }
}

class Card {
    constructor(number){
        this.number = number;
    }

    cardNumber(){
        return `${number}`;
    }
}

class Game {
    constructor() {
        this.score = [];
        this.player = [];
    }

    start(){
        let player1 = createAPLayer('Player 1');
        let player2 = createAPlayer('Player 2');

    }

    createAPlayer(name) {
        return this.player.push(new Player(name));
    }

}