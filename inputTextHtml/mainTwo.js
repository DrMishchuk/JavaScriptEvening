let textArray = []

let paragraf = document.getElementsByTagName('p');
let inputTextform = document.querySelector('.inputText');

function submitText(){
    let text = inputTextform.value;
    textArray.push(text)
    inputTextform.value = '';
    onReloadText();
    console.log(textArray);
}

function onReloadText() {
    textArray.map(function(i){
        document.getElementsByTagName('p')[0].innerHTML = document.getElementsByTagName('p')[0].innerHTML + `<h2>${i}</h2>`;
    })

    
}