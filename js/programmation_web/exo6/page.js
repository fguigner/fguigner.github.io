let aCanvas = null;

function init() {
    let player = document.createElement('audio');
    player.setAttribute('id','player');
    player.setAttribute('controls','');
    player.setAttribute('preload','');
    player.setAttribute('tabindex','0');
    player.setAttribute('ontimeupdate',"updateCanvas()");

    let source = document.createElement('source');
    source.setAttribute('type','audio/mp3');
    source.setAttribute('src','electro-light-where-it-all-began-feat-danyka-nadeau-ncs-lyrics.mp3');


    let div = document.createElement('div');
    div.setAttribute('id','div');

    let bouton = document.createElement('input');
    bouton.setAttribute('id','bouton');
    bouton.setAttribute('type','button');
    bouton.setAttribute('value','Play');
    //bouton.setAttribute('onclick','');


    player.appendChild(source);
    div.appendChild(bouton);


    let canvas = document.createElement('canvas');
    canvas.setAttribute('id','myCanvas');
    canvas.setAttribute('width',200);
    canvas.setAttribute('height',200);


    let body = document.getElementById('body');
    body.appendChild(canvas);
    body.appendChild(player);
    body.appendChild(div);


    aCanvas=document.getElementById('myCanvas');




}


function updateCanvas()
{
        let cercle1=new Cercle(100,100,aCanvas);
        cercle1.ache();
}


let Cercle = function(x,y,canvas)
{
    this.canvas=canvas;
    this.canvas2dContext=this.canvas.getContext("2d");
    this.x=x;
    this.y=y;

    this.ache = function()
    {

        //this.canvas2dContext.beginPath();
        this.canvas2dContext.arc(this.x,this.y,5,0,2*Math.PI,false);
        this.canvas2dContext.fillStyle = "black";
        this.canvas2dContext.stroke();
    }
}

