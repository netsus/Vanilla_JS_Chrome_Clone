const range = document.querySelector('.number_range');
const form = document.querySelector('.guess__play');
const input = document.querySelector('.guess__play-input');
const Generate_value = document.querySelector('.Game_value');
const Match_text = document.querySelector('.choose__text');

let currentValue = 0;

function printValue(){
    currentValue = range.value;
    Generate_value.innerHTML=currentValue;
    // console.log(currentValue);
}

function handleRange(){
    setInterval(printValue,100);
}
function Match(you,answer){
    Match_text.innerHTML=`You chose: ${you}, the machine chose: ${answer}`

    const Match_result = document.createElement('div')
    if(parseInt(you)===parseInt(answer)){
        Match_result.innerHTML="You Win!"
    } else{
        Match_result.innerHTML="You lost!"
    }
    Match_text.appendChild(Match_result)
}

function handleSubmit(event){
    event.preventDefault();
    console.log(input.value);
    let random_value = Math.ceil(Math.random()*currentValue);
    console.log(random_value);
    Match(input.value,random_value);
}

function init(){
    let currentValue = handleRange();
    form.addEventListener('submit', function(event) {
        handleSubmit(event);
    },false);
};

init();