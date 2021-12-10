import '../sass/main.scss'
import { CreatedElements } from './index';
import { answers } from './index';
import './modal'

export const ANSWER = () =>{
    let answerText = answers[Math.floor(Math.random()* answers.length)];
    CreatedElements.paragraph.textContent = answerText;
    CreatedElements.paragraph.classList.toggle('screen1')
    CreatedElements.ballCover.classList.toggle('shake1');
}

    CreatedElements.butn.addEventListener('click', ANSWER);