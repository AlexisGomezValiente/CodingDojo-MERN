const JOIN = document.getElementById("join");
const LIKES = document.getElementsByClassName("btnLike");
const SEARCH = document.getElementById('search');
const GO = document.getElementById('btnGo');

const sacarJoin = () => {
  JOIN.remove();
};

const like = (e) => {
  e.target.parentNode.children[1].innerText =
    Number(e.target.parentNode.children[1].innerText) + 1;
};

const search = () => {
    let input = SEARCH.value;
    alert(`You are searching for "${input}"`);
}

JOIN.addEventListener("click", sacarJoin);

for (let i = 0; i < LIKES.length; i++) {
  LIKES[i].addEventListener("click", like);
}

GO.addEventListener('click', search);