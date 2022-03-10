const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let x = 0;
let y = 0;
let operation = '';

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        display.textContent += digit.id;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        x = display.textContent;
        y = operate(operation, x, y);
        operation = operator.id;
        display.textContent = '';
    });
});

equals.addEventListener('click', () => {
    x = display.textContent;
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
        default:
            return x;
    }
}

function add(x, y){
    return parseInt(x) + parseInt(y);
}

function subtract(x, y){
    return y - x;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return y / x;
}