const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const displayHistory = document.querySelector('.history');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
let x = 0;
let y = 0;
let operation = '';

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(digit.id === '.' && !display.textContent.includes('.')){
            display.textContent += digit.id;
            displayHistory.textContent += digit.id;
        } else if (digit.id !== '.'){
            display.textContent += digit.id;
            displayHistory.textContent += digit.id;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        displayHistory.textContent += operator.id;
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
    displayHistory.textContent = '';
    x = 0;
    y = 0;
    operation = '';
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    displayHistory.textContent = displayHistory.textContent.slice(0, -1);
});

function operate(operation, x, y){
    switch(operation){
        case '+':
            return Math.round(add(x, y) * 100) / 100;
        case '-':
            return Math.round(subtract(x, y) * 100) / 100;
        case 'x':
            return Math.round(multiply(x, y) * 100) / 100;
        case '/':
            return Math.round(divide(x, y) * 100) / 100;
        default:
            return x;
    }
}

function add(x, y){
    return parseFloat(x) + parseFloat(y);
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