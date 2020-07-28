let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', buttonClick);  
}

function viewResult(resultStrig){
    document.getElementById('output').innerHTML = resultStrig;
}

function buttonClick (event) {
    controler(event.currentTarget.innerHTML);
}

function controler(eventTitle){
    let numberOne = Number(document.getElementById('numberOne').value);
    let numberTwo = Number(document.getElementById('numberTwo').value);
    
    if (eventTitle === '+'){
        viewResult(plus(numberOne, numberTwo));
    }
    else if (eventTitle === '-'){
        viewResult(minus(numberOne, numberTwo));
    }
    else if (eventTitle === '*'){
        viewResult(miltiply(numberOne, numberTwo));
    }
    else if (eventTitle === '/'){
        viewResult(devide(numberOne, numberTwo));
    }
    else if (eventTitle === 'C'){
        viewResult("<h1>Hello</h1>");
    }
    else {
        console.log('Error');
    }
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