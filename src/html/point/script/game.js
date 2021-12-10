import list from '../template/list.hbs';
import card from '../template/cards.json';
import { refs } from './variables';
import playList from '../template/player-card.hbs';


//Render of one array of objects onto 2 lists
export const markup = card.map((e) => list(e));
const markupPlayer = card.map((el) => playList(el));

//Final window title text
const text = [
    "UwU You WIN!",
    "Shame On You!",
    "We are equal!",
]

const GiveCard = () =>{
    //Show cards
    setTimeout(() => {
      EnemyCards();
      
      refs.enemyItem.forEach(item =>{
        item.classList.add('hidden');
        refs.giveCardBtn.classList.toggle('is-none');
        refs.cardBtnList.classList.toggle('is-none');
      })
    },400)
  }

  const EnemyCards = () =>{
    refs.enemyItem.forEach(item => {
        markup.forEach(el =>{
          item.innerHTML = markup[GetRandImage(markup)]
        })
    });
  }

//card picker function
const Pick = () => {
    let c =  document.createElement("li");
    c.classList.add("card_item");
    c.classList.add("player_card_item");
    c.innerHTML = markupPlayer[GetRandImage(markupPlayer)];
    if(refs.playerCards.childElementCount !== 3){
        setTimeout(() =>{
            refs.playerCards.appendChild(c)
        },400)
    }
    else{
        refs.pickBtn.setAttribute("disable", "true")
    }
};

//Stop picking. Results
const STOP = () => {
    //card list <li> for player and com
    var comPoi = document.querySelectorAll('.comp_card');
    var plaPoi = document.querySelectorAll('.player_card');

    //cases of card points line 110
    let player = Switcher(plaPoi);
    let computer = Switcher(comPoi);

   setTimeout(() =>{
        //total points on screen
    refs.playPoint.textContent = player;
    refs.compPoint.textContent = computer;

  //card seeing or not
    refs.enemyItem.forEach(cl => {
        cl.classList.remove('hidden');
    })
    comPoi.forEach(cl => {
        cl.classList.remove('is-none');
    })
   },400)


    //Result conditions
    if(player > computer && player <= 21){
        refs.finalTitle.textContent = text[0];
        FinalWindow();
        setTimeout(() =>{
            refs.uwu.play();
        },2100)
    }
    else if(player > computer && player > 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
        setTimeout(() =>{
            refs.su.play();
            refs.su.volume = 0.4;
        },2100)
    }
    else if(player > 21 && computer > 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
        setTimeout(() =>{
            refs.su.play();
            refs.su.volume = 0.4;
        },2100)
    }
    else if(player > 21 && computer <= 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
        setTimeout(() =>{
            refs.su.play();
            refs.su.volume = 0.4;
        },2100)
    }
    else if(player > computer && player <=21 && computer < 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
        setTimeout(() =>{
            refs.uwu.play();
        },2100)
    }
    else if(player < computer && player <=21 && computer < 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
        setTimeout(() =>{
            refs.su.play();
            refs.su.volume = 0.4;
        },2100)
    }
    else if(player == computer){
        refs.finalTitle.textContent = text[2];
        FinalWindow();
        setTimeout(() => {
            refs.casino.play();
            refs.casino.volume = 0.4;
        },2100)
    }
    else if(player < computer && player < 21 && computer > 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
        setTimeout(() =>{
            refs.uwu.play();
        },2100)
    }
    else if(player == 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
        setTimeout(() =>{
            refs.uwu.play();
        },2100)
    }
    else if(computer == 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
        setTimeout(() =>{
            refs.su.play();
            refs.su.volume = 0.4;
        },2100)
    }
    
}

// Reviev in the end of game in both cases of winner
const FinalWindow = () =>{
    setTimeout(() =>{
        refs.finalBack.classList.toggle('is-none');
    },2100)

}

// point
const Switcher = (x) =>{
    var res = 0;
    x.forEach(imageID =>{ 
        console.log(imageID.id)
        switch(imageID.id){
            case "2":
            case "jack":
                res += 2;
                break;
            case "3":
            case "queen":  
                res += 3;
                break;
            case "4":
            case "king":
              res += 4;
              break;
            case "5":
              res += 5;
              break;
            case "6":
              res += 6;
              break;
            case "7":
              res += 7;
              break;
            case "8":
              res += 8;
              break;
            case "9":
              res += 9;
              break;
            case "10":
              res += 10;
              break;
            case "ace":
              res += 11;
              break;
        }
    })
    return res;
}

//result screen functions
//REtry
const RETRY = () =>{
    refs.finalBack.classList.toggle('is-none')

    let span = document.querySelectorAll('.point_span');
    span.forEach(e => {
        e.textContent = "-"
    })

    while(refs.playerCards.firstChild){
        refs.playerCards.removeChild(refs.playerCards.firstChild)
    }

    GiveCard();
}




//Exit
const EXIT = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=2kCklVUxOsM';
}

//Exit on button
const KeyLeft = (e) =>{
    if(e.key !== "Escape"){
        return;
    }
    else{
        EXIT();
    }
}

//main menu
refs.mainMenu.addEventListener('click', (BackToMain) => {
    window.location.reload();
})

//random picture
export const GetRandImage = (x) =>{
 return Math.floor(x.length * Math.random());
} 


//Listeners
refs.pickBtn.addEventListener('click', Pick);
refs.stopBtn.addEventListener('click', STOP);
refs.retryBtn.addEventListener('click', RETRY);
refs.exitBtn.addEventListener('click', EXIT);
window.addEventListener('keyup', KeyLeft);
refs.giveCardBtn.addEventListener('click', GiveCard);