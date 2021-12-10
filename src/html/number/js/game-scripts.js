import { AUDIO } from ".";
import { textWriter } from "./boss-fight";
import list from "../templates/first-list.hbs";
import menu from "../templates/img.json";
import '../sass/main.scss';

    const refs = {
        gameField: document.querySelector('.game_field'),
        bossGameField: document.querySelector('.boss_fight_cover'),
        generateBtn: document.querySelector('.generate_btn'),
        PlayerItem: document.querySelector('.PL_item'),
        ComputerItem: document.querySelector('.AI_item'),
        ItemP: document.querySelector('.player_photo_p'),
        ItemC: document.querySelector('.player_photo_c'),
        numberSpanPlayer: document.querySelector('.num_now_pl'),
        numberSpanComputer: document.querySelector('.num_now_ai'),
        healthBarPlayer: document.querySelector('.round_list_player'),
        healthBarComputer: document.querySelector('.round_list_computer'),
        winWeb: document.querySelector('.backdrop_win'),
        looseWeb: document.querySelector('.backdrop_loose'),
        bossBtn: document.querySelector('.boss_fight_btn'),
        retryBTN: document.querySelector('.retry'),
        hitSound: document.querySelector('.hit'),
        bossDialogBlock: document.querySelector('.boss_dialog'),
        bossPhrese: document.querySelector('.boss_phrase'),
    }
    /////<a href="https://files.fm/u/kcjykfzcz#/view/hp.jpg"><img src="https://files.fm/thumb_show.php?i=ybwxand52"></a>
    //<a href="https://files.fm/u/kcjykfzcz#/view/hp.jpg"><img src="https://files.fm/thumb_show.php?i=uupdvbcvj"></a>
    //<a href="https://files.fm/f/qz6h7drxh"><img src="https://files.fm/thumb_show.php?i=qz6h7drxh"></a>
    
    /*let item = document.createElement('li');
    item.classList.add('player_round_box');
    item.textContent = 34;
    refs.healthBarPlayer.appendChild(item);*/
    const markUp = menu.map((element) => list(element)).join('');
    refs.healthBarPlayer.innerHTML = markUp;
    refs.healthBarComputer.innerHTML = markUp;
    ////
    
    const generator = () =>{
        setTimeout(()=>{
            let a = getRandInt(100);
        let b = getRandInt(75);
        refs.numberSpanPlayer.textContent = a;
        refs.numberSpanComputer.textContent = b;
        if(a < b){
            setTimeout(()=>{
                refs.ComputerItem.style.backgroundColor = "green";
                refs.PlayerItem.style.backgroundColor = "red";
                refs.healthBarPlayer.removeChild(refs.healthBarPlayer.lastElementChild);
                AUDIO.hurtRoblox.play();
                AUDIO.hurtRoblox.volume = 0.5;
                ColorChanger(refs.ItemP);
                   if(refs.healthBarPlayer.childElementCount < 1){
                       refs.looseWeb.classList.remove('is-end');
                       AUDIO.amogus.play();
                       AUDIO.amogus.volume = 0.5;
                       refs.generateBtn.removeEventListener('click', generator)
                   }
            }, 600)
        }
        else{
            setTimeout(()=>{
                refs.ComputerItem.style.backgroundColor = "red";
                refs.PlayerItem.style.backgroundColor = "green";
                refs.healthBarComputer.removeChild(refs.healthBarComputer.lastElementChild);
                AUDIO.hurtMinecraft.play();
                AUDIO.hurtMinecraft.volume = 0.7;
                ColorChanger(refs.ItemC);
                if(refs.healthBarComputer.childElementCount < 1){
                    refs.winWeb.classList.remove('is-end');
                    AUDIO.victory.play();
                    AUDIO.amogus.volume = 0.5;
                    refs.generateBtn.removeEventListener('click', generator)
                }
            }, 600)
        }
        },600)
    }
    
    const getRandInt = (x) =>{
        return Math.floor(Math.floor(x) * Math.random())
    }

   export const RETRY = () =>{
        window.location.reload();
    }

    const BOSSFIGHT = () =>{
            AUDIO.backTrack.pause();
            AUDIO.bossMusic.play();
            AUDIO.bossMusic.volume = 0.5;
        refs.gameField.classList.add('is');
        refs.bossGameField.classList.remove('hide');
        refs.winWeb.classList.add('is-end');
        refs.bossDialogBlock.classList.remove('is-end');
        refs.bossPhrese.classList.remove('is-end');
        textWriter();
    }

  /*  const ColorChanger = () =>{
        refs.Item.style.backgroundColor = "red";
        setTimeout(()=>{
            refs.Item.style.backgroundColor = "rgba(59, 76, 94, 0.438)";  
        },600)
    }*/

   export const ColorChanger = (e) =>{
       e.style.backgroundColor = "red";
        setTimeout(()=>{
           e.style.backgroundColor = "transparent";  
        },600);
    };

    refs.retryBTN.addEventListener('click', RETRY);
    refs.generateBtn.addEventListener('click', generator);
    refs.bossBtn.addEventListener('click', BOSSFIGHT);

