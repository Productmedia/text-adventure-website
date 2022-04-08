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





function drawCards(deckCards) {
for(let i = 0; i < deckCards.length; i++) {
  card = deckCards[i];
  cards[i].innerHTML = 
  `<h3>${card.name} <span class="level">lvl:${card.level}</span></h3> 
  <i class="fa-solid fa-sword"></i>
  <p class="value">${card.type}: ${card.typeValue}</p>
  
  <p class="card-info">${card.description}</p>`;

  
}
}


// drawCards(deck)



slowly_type = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum placeat optio fugiat at eveniet quam perferendis accusantium nam autem praesentium quasi molestias minima dolor delectus, cum aliquam voluptatum quibusdam?"

const text_space = document.getElementsByClassName("type-area")[0]




async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;

  while(i < letters.length){
    await waitForMs(delay);
    eleRef.append(letters[i])
    i++
  }

  return
  
}

// async function deleteSentence(eleRef) {
//   const sentence = eleRef.innerhtml;
//   const letters = sentence.split("");
//   let i = 0;
//   while(letters.length > 0) {
//     await waitForMs(100);
//     letters.pop();
//     $(eleRef).html(letters.join(""));
//   }
// }

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


// typeSentence(slowly_type, text_space, 28)
