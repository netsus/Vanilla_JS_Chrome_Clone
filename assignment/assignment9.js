const numbers = document.querySelector('.calculator__numbers');
let result = document.querySelector('.calculator__result_num');
const zero = document.querySelector('.number_zero');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const keys = document.querySelector('.calculator__numbers');
const operator = document.querySelector('.calculator__oprator');

let X = [];
let Y = [];


function Reset(event){
    result.innerHTML=0;
}

function Calculate(event){
    console.log(event.target.matchs('button'));
    console.log(keys.innerHTML);
}

function init() {
    reset.addEventListener('click',Reset);
    keys.addEventListener('click', event => {
        if (event.target.matches('button')) {
            const key = event.target
            console.log(key.innerText);
        }
    });
    operator.addEventListener('click', event => {
        if (event.target.matches('button')) {
            const op = event.target
            console.log(op.innerText);
        }
    });


}

init();
