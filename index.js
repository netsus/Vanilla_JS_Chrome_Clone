// 브라우저에서 제공하는 함수 존재
// -> HTML을 다루는게 목적

const title = document.querySelector("#title");

const BASE_COLOR = 'white';
const OTHER_COLOR = '#7f8c8d'

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor  === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener('click',handleClick)
}

init();

function handleOffline(){
    console.log("Bye Bye");
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline",handleOffline)
window.addEventListener("online",handleOnline)