console.log("Hello");

// const spreadsheetId = '1swQ2bO9hXo2IVVuXeOvApszGhUeUXeEVhkaFTM8q33M';
const URLSheets = 'https://spreadsheets.google.com/feeds/list/1swQ2bO9hXo2IVVuXeOvApszGhUeUXeEVhkaFTM8q33M/od6/public/values?alt=json';
const URLSheets1 = 'https://spreadsheets.google.com/feeds/list/1swQ2bO9hXo2IVVuXeOvApszGhUeUXeEVhkaFTM8q33M/od6/public/basic?alt=json';
//const URLSheets2 = 'https://sheets.googleapis.com/v4/spreadsheets/feeds/list/1swQ2bO9hXo2IVVuXeOvApszGhUeUXeEVhkaFTM8q33M/od6/public/values?alt=json';

/*
Client ID = 593988815360-0neq94mgk9f3565iqr1s6j51l2akc18n.apps.googleusercontent.com 
Client Secret = r1W9zIxzKpXeOlBmnGvqIsEI 
YOUR API KEY = AIzaSyAJ_7rf7Lf1HPX2U7ZQ_jt3lJv8LMrxjPE 
*/


// const testURL = 'https://jsonplaceholder.typicode.com/users';

document.addEventListener('DOMContentLoaded', function(){
    getJSONP(URLSheets, function(err, data) {
        if (err != null) {
          console.log('Status ERROR: ' + err);
        } else {
            data = data['feed']['entry']
          console.log(data);
          showData(data);
        }
      });
});


function getJSONP (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status <= 400) { 
            callback(null, xhr.response); 
        } else {
            callback(status); 
        }
    };
    xhr.send();
}




function showData(data){
    var out  = '';
    for (let index = 0; index < data.length; index++) {
        out += `<div class="item">`;
        out += `<h5>${data[index].gsx$titlename.$t}</h5>`;
        out += `<img src="${data[index].gsx$productphoto.$t}" alt="" height="300px">`;
        out += `<p>Coast ${data[index].gsx$productpriceusd.$t} USD</p>`;
        out += `<button>Order</button>`;
        out += `</div>`;
    }
    document.querySelector('.sheetsData').innerHTML = document.querySelector('.sheetsData').innerHTML + out;
}