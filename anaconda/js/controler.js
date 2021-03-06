


window.onload = function() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);
    setInterval(game, 2000/15);

}

let px = py = 10;
let gs = tc = 25;
let ax = ay = 15;
let xv = yv = 0;

var trail = [];
let tail = 5;

function simulate() {
    let temp = 37 + Math.floor(Math.random()*4);
    console.log(temp);
    keyPush(temp);
}


function keyPush(event) {
    switch(event.keyCode) {
        case 37:
            xv=-1; yv=0;
            break;
        case 38:
            xv=0; yv=-1;
            break;
        case 39:
            xv=1; yv=0;
            break;
        case 40:
            xv=0; yv=1;
            break;
    }
}

function game() {
    px += xv;
    py += yv;
    if(px < 0) {
        px = tc-1;
    }
    if(px > tc-1) {
        px = 0;
    }
    if(py < 0) {
        py = tc-1;
    }
    if(py > tc-1) {
        py=0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-5, gs-5);
        if (trail[i].x==px && trail[i].y==py) {
            //tail = 5;
        }
    }
    trail.push({x:px, y:py});
    while (trail.length > tail) {
        trail.shift();
    }
    
    if (ax==px && ay==py) {
        tail += Math.floor(Math.random()*10);
        ax = Math.floor(Math.random()*tc);
        ay = Math.floor(Math.random()*tc);
    }
    
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}