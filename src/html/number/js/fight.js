
const refs = {
    enemyBlock: document.querySelector('.enemy_phrase'),
    enemyText: document.querySelector('.enemy_text'),
    enemyButton: document.querySelector('.next_btn'),
    heroBlock: document.querySelector('.hero_phrase'),
    heroText: document.querySelector('.hero_text'),
    heroButton: document.querySelector('.start_battle'),
    gameField: document.querySelector('.game'),
    firstDialog: document.querySelector('.first_dialog')
};

const text = ["Yo, fucker! I wil fuck u up and all your fucking family u fucking motherfucker!",
"Come get some!"];


//typing function
let i = 0, j = 0;
let speed = 30;

export const typeWriter = () => {
  if (i < text[0].length) {
    refs.enemyText.textContent += text[0].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
////
const heroWriter = () => {
    if (j < text[1].length) {
      refs.heroText.textContent += text[1].charAt(j);
      j++;
      setTimeout(heroWriter, speed);
    }
  }

//next phrase
const NextPhrase = () =>{
    refs.enemyBlock.classList.toggle('is');
    refs.heroBlock.classList.toggle('is');
    heroWriter();
}

refs.enemyButton.addEventListener('click', NextPhrase);

//FightButton
const StartFight = () =>{
    //close hero
    refs.heroBlock.classList.toggle('is');
    //start fight
    refs.gameField.classList.toggle('is');
    refs.firstDialog.classList.toggle('is')
}


refs.heroButton.addEventListener('click', StartFight);
