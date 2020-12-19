function sayHello(name, age){

    return `Hello ${name} you are ${age} years old.`;
};


const greetCwj = sayHello("CWJ", 15);

console.log(greetCwj);


const calculator = {
    plus: function(num1,num2){
        return num1 + num2;
    }
}

const result = calculator.plus(5,5);
console.log(result); 
