// declaring variables //
let administrator = false
let playing = true
let p1score = 0
let p2score = 0
let colours = ["red", "yellow", "black"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let player1card =" ";
let player2card =" ";

// clears everything to start //
console.clear();

let deck = [];

for(let i = 0; i < colours.length; i++)
{
    for(let x = 0; x < values.length; x++)
    {
        let card = {Value: values[x], Suit: colours[i]};
        deck.push(card);
    }
}
function shuffle(deck) {
    // for 31 turns
    // switch the values of two random cards
    for (let i = 0; i < 31; i++)
    {
        let location1 = Math.floor((Math.random() *30));
        let location2 = Math.floor((Math.random() *30));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
    console.log(deck)
}
shuffle(deck)

// handing out the top card to player 1 //
deck.splice(0,1);
player1deck.push;

function Hand() {
    this.cards = [];

    this.getCard = function() {
        return this.cards.pop();
    }
}
var deck2 = new Hand();
var card = deck2.getCard();

// if either deck is empty, game over //=-
// player 1 //
if (player1card.length === 0) {
    // game over
    if (player1card.length > 0) {
        console.log("Player 1 Won");
    } else {
        console.log("Player 2 Won");
    }
    // player 2 //
} else if (player2card.length === 0) {
    // game over
    if (player2card.length > 0) {
        console.log("Player 2 Won");
    } else {
        console.log("Player 1 Won");
    }
}