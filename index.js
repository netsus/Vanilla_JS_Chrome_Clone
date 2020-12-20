// 브라우저에서 제공하는 함수 존재
// -> HTML을 다루는게 목적

const title = document.querySelector("#title");

function handleResiae(event){
    console.log(event);
    // console.log("I have been resized");
}

window.addEventListener("resize", handleResiae);


function handleClick(){
    title.style.color = 'yellow';
}

title.addEventListener("click",handleClick);