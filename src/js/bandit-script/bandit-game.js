import { refs } from "./variables";
import photo from '../../templates/img.hbs';
import card from '../../templates/list.json';


const markup = card.map((e) =>photo(e));

let a = document.querySelector('.horse');
let b = document.querySelector('.rata');


//hand animation
refs.slotHand.addEventListener('click', (ROTATION) =>{
    refs.slotHand.classList.add('rotat');
    a.play();
    a.volume = 0.4;

    //animation
    let time;
    time = setInterval(() =>{
        refs.slotImg.forEach(e => {
            e.innerHTML = markup[GetRand(markup)];
        });
    },100)
    setTimeout(() =>{
        //stop spinning and music
        clearInterval(time);
        a.pause();

        //combinations
        var photo = document.querySelectorAll('.ph');
        Switcher(photo);
        refs.money.textContent = `${refs.m}$`;
        refs.spins.textContent = `${refs.s}`;
    }, 3500)

   

    setTimeout(() =>{
        refs.slotHand.classList.remove('rotat');
    }, 200)
})




const Switcher = (x) =>{
    let arr = [];
    x.forEach(e => {
        arr.push(e.id);
            
    });

    if(arr[0] === arr[1] && arr[1] === arr[2]){
        console.log(3)
        b.play();
        b.volume = 0.4;
        Secret();
        refs.m+=50;
        refs.s+=5;
    }
    else if(arr[0] === arr[1] || arr[2] === arr[1]){
        console.log(2);
        refs.s +=1;
        refs.m +=10;
    }
    else{
       if(refs.m <= 10 || refs.s ===0){
           window.location.reload();
       }
       else{
        refs.s--;
        refs.m-=20;
       }
    }
    return refs.m, refs.s;
}

const GetRand = (x) =>{
    return Math.floor(x.length * Math.random())
}


//lucky block
const Secret = () =>{
    refs.back.classList.remove('is-none');
    let rand = Math.floor(Math.floor(3) * Math.random());
    refs.mystery.classList.toggle('anima');
    if(rand == 0){
    
        
            refs.m+=30;
            refs.s+=3;
            refs.luckTitle.textContent = `Money: +30, Spins: +3`;
            timeOut();
    }
    else if(rand == 1){
      
        refs.m+=300;
        refs.s+=10;
        refs.luckTitle.textContent = `Money: +300, Spins: +30`;
        refs.van.classList.remove('is-none')
        timeOut();

    }
    else{

        refs.m+=50;
        refs.s+=5;
        refs.luckTitle.textContent = `Money: +50, Spins: +5`;
        timeOut();
    }

    setTimeout(()=>{
        refs.mystery.classList.add('is-none');
        refs.mystery.classList.toggle('anima');

    },4000);
}
const timeOut = () =>{ setTimeout(()=>{
    refs.back.classList.toggle('is-none');
    refs.luckTitle.textContent = `Try your Luck!`;
    refs.mystery.classList.toggle('is-none');
    refs.van.classList.add('is-none')
},7500)
}


