

function ourFunction() {
    let paragraf = document.querySelector('#paragarf');
    let text = "<h1>Привет мир.</h1> Я Рой Миллер. Я спасаю мир от плолхих парней, но сегодня я отдыхаю вместе с Вами. Приятного просмотра";
    paragraf.innerHTML = paragraf.textContent + text;
}

const appMy = () => {
    console.log("Hello JS");
}

setTimeout(appMy, 1000);
