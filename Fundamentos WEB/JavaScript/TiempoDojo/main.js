const LUGARES = document.getElementsByClassName('lugar');
const COOKIEBTN = document.getElementById('cookieBtn');
const COOKIE = document.getElementById('cookie');
const TEMPMIN = document.getElementsByClassName('min');
const TEMPMAX = document.getElementsByClassName('max');
const OPCIONTEMP = document.getElementById('opcionTemperatura');

const alerta = () => {
    alert('Cargando informe meteorologico...');
}

const quitarCookie = () => {
    COOKIE.remove();
}

for(let i = 0; i < LUGARES.length; i++){
    LUGARES[i].addEventListener('click', alerta)
}

const cambioTemp = () => {
    if(OPCIONTEMP.value == 'F'){
        for(let i = 0; i < TEMPMIN.length; i++){
            TEMPMIN[i].innerText = Math.round((Number(TEMPMIN[i].innerText) * 9/5) + 32);
            TEMPMAX[i].innerText = Math.round((Number(TEMPMAX[i].innerText) * 9/5) + 32);
        }
    }else if(OPCIONTEMP.value == 'C'){
        for(let i = 0; i < TEMPMIN.length; i++){
            TEMPMIN[i].innerText = Math.round((Number(TEMPMIN[i].innerText) - 32) * 5/9);
            TEMPMAX[i].innerText = Math.round((Number(TEMPMAX[i].innerText) - 32) * 5/9);
        }
    }
}

COOKIEBTN.addEventListener('click', quitarCookie);