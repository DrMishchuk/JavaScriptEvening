const URLSheets1 = 'https://spreadsheets.google.com/feeds/list/1av6l5JgiN8kZVwwSAHA1yc5k7ODB0I05J8IAHiRf094/od6/public/basic?alt=json';

const URLSheets2 = 'https://spreadsheets.google.com/feeds/list/1av6l5JgiN8kZVwwSAHA1yc5k7ODB0I05J8IAHiRf094/od6/public/values?alt=json'




document.addEventListener('DOMContentLoaded', function(){
    getJSON(URLSheets2, function (err, data) {
        if (err != null){
            console.log('Status ERROR' + err);
        } else {
            console.log(data.feed.entry);
            renderData(data.feed.entry);
        }
    });
});



function getJSON(url, callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status < 400) {
            callback(null, xhr.response);
        } else {
            callback(xhr.status)
        }
    };
    xhr.send();
}

function renderData(data) {
    let out = '';
    for (let index = 0; index < data.length; index++) {
        out += `<div class="item">`
        out += `<h5>${data[index].gsx$titleproduct.$t}</h5>`
        out += `<img src="${data[index].gsx$ptotoproduct.$t}" alt="photo">`
        out += `<p>${data[index].gsx$priceproduct.$t} USD</p>`
        out += `<button>Order</button>`
        out += `</div>`
    }
    document.querySelector('.sheetData').innerHTML = out;
}
