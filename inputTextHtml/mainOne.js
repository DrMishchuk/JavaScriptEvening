let paragraf = document.getElementsByTagName('p');
let inputTextform = document.querySelector('.inputText');

function submitText(){
    paragraf[0].textContent = paragraf[0].textContent + '<h2>' + inputTextform.value + '</h2>';
    inputTextform.value = '';
}