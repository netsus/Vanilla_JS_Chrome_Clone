const form = document.querySelector('.js-form'),
input = document.querySelector('input'),
greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
SHOWING_CN = 'showing';

// local storage에 값 추가
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// 사용자 id 입력받으면 출력 및 저장(localStorage)
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser ===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();