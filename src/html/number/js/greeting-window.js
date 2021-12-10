import { AUDIO } from '.';
import {typeLine} from './rule';

const refs = {
    backDrop: document.querySelector('.backdrop'),
    startBtn: document.querySelector('.greet_btn[data-action="start"]'),
    exitBtn: document.querySelector('.greet_btn[data-action="exit"]'),
    ruleWindow: document.querySelector('.rule_cover'),
}

//const clikSound= new Audio('./audio/boss.mp3')
//functions
 const StartGame = () => {
    setTimeout(()=>{
        AUDIO.backTrack.play();
        AUDIO.backTrack.volume = 0.3;
    },300)
    refs.backDrop.classList.toggle('is-hidden');
    refs.ruleWindow.classList.remove('is-hidden');
    typeLine();
  // clikSound.play();
}

const ExitGame = () => {
    window.location.reload();
}

//listeners
refs.startBtn.addEventListener('click', StartGame)

refs.exitBtn.addEventListener('click', () => {
    ExitGame();
})

