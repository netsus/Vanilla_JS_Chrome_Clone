const body = document.querySelector("body");

const IMG_NUMBER = 5;

// 랜덤 넘버(6)에 따라 배경 이미지 랜덤으로 골라주는 역할

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber +1}.jpg`;
    body.appendChild(image)
    image.classList.add("bgImage")
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    console.log(number);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();