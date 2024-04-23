const DIVIMAGES = document.getElementById('images');
const FORM = document.getElementById('form');
const NUMIMG = document.getElementById('numImg');
const MODAL = document.getElementById('modal');
const MODALHIJO = document.getElementById('modalHijo');
const CERRARMODAL = document.getElementById('cerrarModal');

const pedirImg = async (e) =>{
    e.preventDefault();

    const numImg = NUMIMG.value;
    let response = null;

    const URL = `https://dog.ceo/api/breeds/image/random/${numImg}`;
    const CONFIG = {
        method: FORM.method.toUpperCase()
    }
    await fetch(URL, CONFIG)
    .then(res => {
        if(res.ok == false){
            throw new Error('Network response was not ok');
        }
        console.log(res);
        return res.json();
    })
    .then(res => {
        console.log(res);
        return response = res.message;
    })
    .catch(err => {
        crearModal(err);
    });

    NUMIMG.value = "";
    if(response) cargarImgs(response);
}

const cargarImgs = (imgs) => {
    DIVIMAGES.innerHTML = "";

    imgs.forEach(img => {
        const imgHijo = document.createElement('img');
        imgHijo.classList.add('imgHijo');
        imgHijo.src = `${img}`;

        DIVIMAGES.appendChild(imgHijo);
    })
}

const crearModal = (err) => {
    console.log(err)
    const textoModal = document.createElement('h2');
    textoModal.id = "textoModal";
    textoModal.innerText = `${err}`;
    MODALHIJO.appendChild(textoModal);
    MODAL.style.display = "flex";
}

const cerrar = () => {
    MODAL.style.display = "none";
    document.getElementById('textoModal').remove();
}

CERRARMODAL.addEventListener('click', cerrar);