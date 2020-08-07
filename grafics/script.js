let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// ctx.fillStyle = "Red";
// for (let index = 0; index < 300; index++) {
//     ctx.fillRect(index, 0, 30 + index, 30);
//}
var x = 0;
var timer;

spirograf();
   
function drawSin() {
        y = 100 + 20 * Math.sin(x);
        x = x + 0.1;
        ctx.fillRect(5*x, y, 2, 2);
        timer = setTimeout(drawSin, 10);
    }

    var R=100;
    var r=10;
    var d=10;
    var teta=0;


    function spirograf() {
        let x = (R-r)*Math.cos(teta) + d*Math.cos((R-r)*teta/r);
        let y = (R-r)*Math.sin(teta) - d*Math.sin((R-r)*teta/r);
        teta = teta+0.1;
        ctx.fillRect(1*x+200, 1*y+200, 4, 4);
        timer = setTimeout(spirograf, 50);
    }

    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "Green";
    // ctx.beginPath();
    // ctx.arc(250, 250, 100, 0, 2*Math.PI, false);
    // ctx.fill();
    // ctx.stroke();
    
    // ctx.beginPath();
    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "Red";
    // ctx.beginPath();
    // ctx.arc(250, 250, 50, 0, 2*Math.PI, false);
    // ctx.fill();
    

