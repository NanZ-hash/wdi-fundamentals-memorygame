

const cards=["queen","queen","king","king"];
let cardsInPlay=[]; 

function cheackForMatch () { 

if (cardsInPlay[0] === cardsInPlay[1])
	console.log ("you have found a match ! ");
	else
	console.log ("Sorry try again ! ");


}
function flipCard (cardId) { 

let cardOne = cards[cardId];
cardsInPlay.push(cardId);
console.log("user flipped " + cards[cardId]); 

}


flipCard(2)
flipCard(0)

cheackForMatch(cardsInPlay)