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

      cards[i].classList.remove("intro");
      console.log("ended")
    }
  }
}