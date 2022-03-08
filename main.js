function operate(operation, x, y){
    switch(operation){
        case 'add':
            add(x, y);
            break;
        case 'subtract':
            subtract(x, y);
            break;
        case 'multiply':
            multiply(x, y);
            break;
        case 'divide':
            divide(x, y);
            break;
    }
}

function add(x, y){
    console.log(x + y);
}

function subtract(x, y){
    console.log(x - y);
}

function multiply(x, y){
    console.log(x * y);
}

function divide(x, y){
    console.log(x / y);
}


operate('divide', 5, 6);