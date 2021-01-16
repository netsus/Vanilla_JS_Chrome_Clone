const form = document.querySelector('.js-form');
const country = form.querySelector('#country');

const CO_LS = 'Country';

// local storage에 값 추가
function saveName(text){
    localStorage.setItem(CO_LS, text);
}

// 사용자 id 입력받으면 출력 및 저장(localStorage)
function handleSubmit(event){
    event.preventDefault();
    const currentValue = country.value;
    paintCountry(currentValue);
    saveName(currentValue);
}


function paintCountry(text){
    console.log(text);
    country.value = text;
}

function listenChange(){
    form.addEventListener('change', handleSubmit)
}

function loadName(){
    const currentCountry = localStorage.getItem(CO_LS);
    if(currentCountry === null){
        listenChange();
    }else{
        paintCountry(currentCountry);
    }
    listenChange();
}

function init(){
    loadName()
}

init();