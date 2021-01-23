const numbers = document.querySelector('.calculator__numbers');
let result = document.querySelector('.calculator__result_num');
const zero = document.querySelector('.number_zero');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const keys = document.querySelector('.calculator__numbers');
const operator = document.querySelector('.calculator__oprator');

let exp = "";
let num = "";

function Reset(event){
    result.innerHTML=0;
    exp="";
    num="";
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
            if (key.innerText==='='){
                try {
                    console.log(eval(exp));
                    result.innerHTML = eval(exp);
                    num="";
                } catch {
                    result.innerHTML = "Try again";
                }
            }
            else {
                exp+=key.innerText;
                num+=key.innerText;
                result.innerHTML=num;
            }
            console.log(exp);
        }
    });

    operator.addEventListener('click', event => {
        if (event.target.matches('button')) {
            const op = event.target
            if (op.innerText !== 'C'){
                try {
                    num="";
                    result.innerHTML = eval(exp);
                    exp+=op.innerText;                    
                } catch  {
                    num="";
                }
            }
            console.log(exp);
        }
    });
}

init();
