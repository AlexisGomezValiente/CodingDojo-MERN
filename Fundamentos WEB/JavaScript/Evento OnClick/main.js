const obtenerDom = (id) => document.getElementById(id);

const LOG = obtenerDom('log');
const ADDBUTTON = obtenerDom('addDef');
const BTNLIKES = document.getElementsByClassName('btnLikes');

const log = () =>{
    let verificacion = LOG.innerText == 'Login';
    if(verificacion) LOG.innerText = 'Logout';
    else LOG.innerText = 'Login';
}

const agregar = () => {
    ADDBUTTON.remove();
}

const like = (e) => {
    e.target.querySelector('span').innerText = Number(e.target.querySelector('span').innerText) + 1;
    alert('Ninja was liked');
}

LOG.addEventListener('click', log);
ADDBUTTON.addEventListener('click', agregar);

for(let i = 0; i < BTNLIKES.length; i++){
    BTNLIKES[i].addEventListener('click', like);
}