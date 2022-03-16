const option_panel = document.querySelector('#option-panel');

let cards = document.getElementsByClassName("card")


option_panel.onanimationend = () => {
  console.log('Animation ended');
  for(let i = 0; i < cards.length; i++) {
    cards[i].classList.add("intro")
    cards[i].style.display = "inline-block";
    
  }
  
  
};


for(let i = 0; i < cards.length; i++) {
if(cards[i].classList.contains("intro")) {
const card_intro = document.querySelector('.intro');
card_intro.onanimationend = () => {
  console.log("This is been called")
      cards[i].classList.remove("intro");
      console.log("ended")
    }
  }
}



cards[1]

const deck = [melee, range, melee]

function drawCards(deckCards) {
for(let i = 0; i < deckCards.length; i++) {
  card = deckCards[i];
  cards[i].innerHTML = 
  `<h3>${card.name} <span class="level">lvl:${card.level}</span></h3> 
  <p>ICON</p>
  <p class="value">${card.type}: ${card.typeValue}</p>
  
  <p class="card-info">${card.description}</p>`;

  
}
}


drawCards(deck)