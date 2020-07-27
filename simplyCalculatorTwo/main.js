let numberOne = document.getElementById('numberOne').value;
let numberTwo = document.getElementById('numberTwo').value;

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');

buttonPlus.addEventListener('click', Plus);
buttonMinus.addEventListener('click', Minus);

function Plus() {
    let numberOne = Number(document.getElementById('numberOne').value);
    let numberTwo = Number(document.getElementById('numberTwo').value);
    document.getElementById('output').innerHTML = plus(numberOne, numberTwo);
}

function Minus() {
    let numberOne = Number(document.getElementById('numberOne').value);
    let numberTwo = Number(document.getElementById('numberTwo').value);
    document.getElementById('output').innerHTML = minus(numberOne, numberTwo);
}


function plus(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function minus(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function miltiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function devide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}