const ACCEPT = document.getElementsByClassName("accept");
const CLOSE = document.getElementsByClassName("close");
const NUMREQ = document.getElementById("numReq");
const NUMCON = document.getElementById("numCon");
const EDITPROFILE = document.getElementById("profile");
const NAME = document.getElementById('name');

const aceptar = (e) => {
  NUMREQ.innerText = Number(NUMREQ.innerText) - 1;

  let arr = [];
  for (let i = 0; i < NUMCON.innerText.length; i++) {
    if (NUMCON.innerText[i] * 1 == NUMCON.innerText[i])
      arr.push(NUMCON.innerText[i]);
  }
  let arrString = arr.join("");

  NUMCON.innerText = `${Number(arrString) + 1}+`;
  let padre = e.srcElement.parentElement.parentElement.parentElement;
  padre.remove();
};

const cerrar = (e) => {
  NUMREQ.innerText = Number(NUMREQ.innerText) - 1;
  let padre = e.srcElement.parentElement.parentElement.parentElement;
  padre.remove();
};

const editProfile = () => {
    NAME.innerText = 'Willian Gomez';
}

for (let i = 0; i < ACCEPT.length; i++) {
  ACCEPT[i].addEventListener("click", aceptar);
}

for (let i = 0; i < CLOSE.length; i++) {
  CLOSE[i].addEventListener("click", cerrar);
}

EDITPROFILE.addEventListener('click', editProfile)