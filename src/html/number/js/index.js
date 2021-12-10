import './greeting-window';
import './rule';
import './name';
import './fight';
import './game-scripts';
import './boss-fight';


export const AUDIO = {
    buttons: document.querySelectorAll("button"),
    bossMusic: document.querySelector('.boss_music'),
    hitSound: document.querySelector('.hit'),
    backTrack: document.querySelector('.back'),
    clickSound: document.querySelector('.clik'),
    AudioBtn: document.querySelector('.sound_btn'),
    hurtMinecraft: document.querySelector('.min_hurt'),
    hurtRoblox: document.querySelector('.rob_hurt'),
    amogus: document.querySelector('.amogus'),
    victory: document.querySelector('.victory'),
};


const CLICKING = () => {
    AUDIO.clickSound.play();
    AUDIO.clickSound.volume = 0.1;
}

const PlayStop = () =>{
    AUDIO.backTrack.pause();
    AUDIO.bossMusic.pause();
}

AUDIO.buttons.forEach(e =>
    e.addEventListener('click', CLICKING));

AUDIO.AudioBtn.addEventListener('click', PlayStop);