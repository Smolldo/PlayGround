var shaker = require('shaker');

var myShakeEvent = new Shake({
    threshold:15,
    timeout:1000
})

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);
const shakeEventDidOccur = () =>{
    alert('shaked')
}

alert('sd')