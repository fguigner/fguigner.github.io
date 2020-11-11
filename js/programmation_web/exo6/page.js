let aCanvas = null;

function init() {
    let player = document.createElement('audio');
    player.setAttribute('id','player');
    //player.setAttribute('controls','');
    player.setAttribute('preload','');
    player.setAttribute('tabindex','0');
    player.setAttribute('ontimeupdate',"updateCanvas(this)");

    let source = document.createElement('source');
    source.setAttribute('type','audio/mp3');
    source.setAttribute('src','electro-light-where-it-all-began-feat-danyka-nadeau-ncs-lyrics.mp3');


    let div = document.createElement('div');
    div.setAttribute('id','div');

    let bouton = document.createElement('input');
    bouton.setAttribute('id','bouton');
    bouton.setAttribute('type','button');
    bouton.setAttribute('value','Play');
    bouton.setAttribute('onclick','play_pause()');


    player.appendChild(source);
    div.appendChild(bouton);


    let canvas = document.createElement('canvas');
    canvas.setAttribute('id','myCanvas');
    canvas.setAttribute('width',500);
    canvas.setAttribute('height',500);


    let body = document.getElementById('body');
    body.appendChild(canvas);
    body.appendChild(player);
    body.appendChild(div);


    aCanvas=document.getElementById('myCanvas');




}

function play_pause(){
    if (player.paused){
        player.play();
    }else {
        player.pause();
    }
}


function updateCanvas(event)
{
        let tps = event.currentTime;
        let cercle=new Cercle(250,250,aCanvas, tps);
        cercle.ache(tps);
}


let Cercle = function(x,y,canvas, time)
{
    this.canvas=canvas;
    this.canvas2dContext=this.canvas.getContext("2d");
    this.x=x;
    this.y=y;
    this.radius=time*1;

    this.ache = function()
    {
        this.canvas2dContext.clearRect(0,0,canvas.width, canvas.height);
        this.canvas2dContext.beginPath();
        this.canvas2dContext.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        this.canvas2dContext.fillStyle = "grey";
        this.canvas2dContext.fill();
        this.canvas2dContext.stroke();
    }
}

