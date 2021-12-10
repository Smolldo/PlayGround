
let rules = document.querySelector('.rule_list');
const ruleBtn = document.querySelector('.rule_confirm');
const names = document.querySelector('.name_block');
const text = ['1. Select a name.\n',
"2. By pressing the 'generate' button, you\n",
"and the AI ​​will have random numbers.\n",
"3. Whoever has the highest number wins the round.\n",
"4. The game lasts up to 3 wins.\n",
"5. In case of a tie, an additional round is held.\n",
"6. Good luck, Samurai.\n"];

const nameS = () =>{
  names.classList.toggle('is-none');
  ruleBtn.setAttribute("disabled", "true");
}

let line = 0;
let count = 0;
let result = '';
export const typeLine = () => {
  let interval = setTimeout(
    () => {
      result += text[line][count]
      rules.textContent =result +'|';
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
         rules.textContent =result;
        return true;
      }
    }
    typeLine();
  }, getRandomInt(getRandomInt(25*2.5)))
}


function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

///////////////


ruleBtn.addEventListener('click', nameS);