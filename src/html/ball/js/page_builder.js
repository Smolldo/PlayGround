import {CreatedElements} from './index';
import '../sass/main.scss';
import './answer';

//appending
document.body.appendChild(CreatedElements.ballCover);
CreatedElements.butn.classList.add('ball_btn');
//ball cover placement
CreatedElements.ballCover.appendChild(CreatedElements.ballBody);
CreatedElements.ballCover.appendChild(CreatedElements.butn);
CreatedElements.ballCover.classList.add('ball_div');
CreatedElements.ballCover.classList.add('shake');
 //ball body
 CreatedElements.ballBody.classList.add('ball');
 CreatedElements.ballBody.appendChild(CreatedElements.ballScreen);
 //ball screen
 CreatedElements.ballScreen.appendChild(CreatedElements.paragraph);
 CreatedElements.ballScreen.classList.add('ball_screen');
//paragreph
CreatedElements.paragraph.classList.add('p_text');
CreatedElements.paragraph.classList.add('screen');
//HTML text content
CreatedElements.paragraph.textContent = "SHAKE BALL";
//title
CreatedElements.title.textContent = "Ask the magic 8 ball what u want!";
document.body.insertAdjacentElement('beforebegin',CreatedElements.title);
