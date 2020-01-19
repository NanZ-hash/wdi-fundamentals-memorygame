


const cards=[
{
	rank:'queen',
	suti: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank:'queen',
	suti: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank:'king',
	suti: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank:'king',
	suti: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}, ];




function createBoard () {

	for ( let i=0; i< cards.length; i++)
	{
let cardElement = document.createElement('img');
cardElement.setAttribute('src','images/back.png');
cardElement.setAttribute('data-id',i);
cardElement.addEventListener('click',flipCard());
document.getElementById('game-board').appendChild(cardElement); 
	}
}


 cardsInPlay=[]; 
function cheackForMatch () { 

if (cardsInPlay[0] === cardsInPlay[1])
	alert ("you have found a match ! ");
	else
	alert ("Sorry try again ! ");


}
function flipCard () { 

cardId=this.getAttribute('data-id');
this.setAttribute('src',cards[cardId].cardImage);
this.src=cards[cardId].cardImage;
cardsInPlay.push(cards[cardId]);
console.log(cards[cardId].cardImage);

}

createBoard();