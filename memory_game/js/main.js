

const cards=["queen","queen","king","king"];
let cardsInPlay=[]; 
let cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("user flipped queen"); 
let CardTwo = cards[2];
cardsInPlay.push('CardTwo');
console.log("user flipped King"); 

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1])
	alert ("you have found a match ! ");
	else
		alert ("Sorry try agine ! ");
}


