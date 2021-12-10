import audioPlay from "audio-play";
import { refs } from "./variables";

const RULE = () => {
   setTimeout(()=>{
    refs.ruleList.classList.toggle('is-none');
   },200)
}


refs.ruleBtn.addEventListener('click', RULE);
const butt = document.querySelectorAll('button');
butt.forEach(element => {
   element.addEventListener('click', (Mus) => {
      refs.klik.play();
      refs.klik.volume = 0.4;
   })
});

refs.pointBtn.addEventListener('click', (Show) => {
   refs.cardList.classList.toggle('is-none');
})

/*radio 
const playList = [
   "track1.mp3",
   "track2.mp3",
   "track3.mp3",
   "track4.mp3",
]

let track;

window.onload = () =>{
   track = 0;
};
 refs.aud.play();


const NextTrack = (trackNumber) => {
   refs.aud.src = `./audio/${playList[trackNumber]}`;
   console.log(refs.aud.src)
  refs.aud.currentTime = 0;

  refs.aud.play();
   // In browsers that don’t yet support this functionality,
   // playPromise won’t be defined.
   

}*/

refs.play.addEventListener('click', (PlayMusic) => {
   refs.aud.play();
   refs.aud.volume = 0.5;

});

refs.stop.addEventListener('click', (StopMusic) =>{
   refs.aud.pause();
   clearInterval(audioPlay);
});

/*refs.next.addEventListener('click', (next) => {
   if(track < 3){
      track++;
      NextTrack(track);
   }
   else{
      track = 0;
      NextTrack(track);
   }
})*/



