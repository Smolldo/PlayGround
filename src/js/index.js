const i = document.querySelector('.hand');



i.addEventListener('click', (ROTATION) =>{
    i.classList.add('rotat');
    setTimeout(() =>{
        i.classList.remove('rotat');
    }, 200)
})