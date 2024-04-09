const BTNLIKES = document.getElementsByClassName('btnLike');
const CONTAINER = document.getElementsByClassName('personHead');

const like = (e) => {
    e.target.parentElement.querySelector('p').querySelector('span').innerText = Number(e.target.parentElement.querySelector('p').querySelector('span').innerText) + 1;
}

for(let i = 0; i < BTNLIKES.length; i++){
    BTNLIKES[i].addEventListener('click', like);
}