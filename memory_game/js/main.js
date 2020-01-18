

const cards=[
{
	rank:'queen',
	suti: 'hearts',
	cardImage: "image/queen-of-hearts.png"
},
{
	rank:'queen',
	suti: 'diamonds',
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank:'king',
	suti: 'hearts',
	cardImage: "image/king-of-hearts.png"
},
{
	rank:'king',
	suti: 'diamonds',
	cardImage: "image/king-of-diamonds.png"
}, ];
 cardsInPlay=[]; 
function cheackForMatch () { 

if (cardsInPlay[0] === cardsInPlay[1])
	alert ("you have found a match ! ");
	else
	alert ("Sorry try again ! ");


}
function flipCard (cardId) { 


cardsInPlay.push(cards[cardId]);
console.log("user flipped " + cards[cardId].rank +"\n"+ cards[cardId].cardImage +"\n"+ cards[cardId].suti); 

}


flipCard(0)
flipCard(2)

cheackForMatch(cardsInPlay)