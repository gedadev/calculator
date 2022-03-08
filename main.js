const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let x;
let y;
let operation;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        display.textContent += digit.id;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        x = display.textContent;
        operation = operator.id;
        display.textContent = '';
    });
});

equals.addEventListener('click', () => {
    y = display.textContent;
    display.textContent = operate(operation, x, y);
});

clear.addEventListener('click', () => {
    display.textContent = '';
    x = 0;
    y = 0;
    operation = '';
});

function operate(operation, x, y){
    switch(operation){
        case 'add':
            return add(x, y);
        case 'subtract':
            return subtract(x, y);
        case 'multiply':
            return multiply(x, y);
        case 'divide':
            return divide(x, y);
    }
}

function add(x, y){
    return parseInt(x) + parseInt(y);
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}