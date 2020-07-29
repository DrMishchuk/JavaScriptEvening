document.body.onload = () => {
    let div = document.createElement('div');
    div.className = 'inputContainer';
    div.innerHTML = '<input id="inputArea" type="number"></input>';
    
    document.querySelector('.wraper').appendChild(div);

    document.querySelector('#inputArea').value = '0';

    div = document.createElement('div');
    div.className = 'buttonContainer';
    document.querySelector('.wraper').appendChild(div);

    '7 8 9 * 4 5 6 / 1 2 3 - 0 . = +'.split(' ').map((symbol)=> {
        document.querySelector('.buttonContainer').insertAdjacentHTML('beforeend', `<button class="buttonItem">${symbol}</button>`)
    });

    document.querySelectorAll('.buttonItem').forEach( (element) => {
        element.addEventListener('click', buttonClick)
    }) 
}

function viewResult(resultStrig){
    document.getElementById('inputArea').value += resultStrig;
}

function buttonClick (event) {
    controler(event.currentTarget.innerHTML);
}

function controler(eventTitle){    
    if (eventTitle === '1' || eventTitle === '2' || eventTitle === '3' || eventTitle === '4' || eventTitle === '5' || eventTitle === '6' || eventTitle === '7' || eventTitle === '8' || eventTitle === '9' || eventTitle === '0'){
        viewResult(eventTitle);
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