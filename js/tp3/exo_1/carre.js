function Carre(x, y, hauteur, longueur){
    this.x=x;
    this.y=y;
    this.hauteur=hauteur;
    this.longeur=longueur;
    this.interval=null;
}

Carre.prototype.dessiner=function(){
    console.log("dessiner ::");
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.longeur, this.hauteur);
    console.log(this);

}


Carre.prototype.pausecomp=function(millis)
{
    let date = new Date();
    let curDate = null;
    do {
        curDate = new Date();
    } while(curDate-date < millis);
}


Carre.prototype.animer=function(that){
    console.log("animer ::", that);
    if (that.x > 0) {
        context.clearRect(that.x, that.y, that.longeur, that.hauteur);
        that.x -= 10;
        //that.pausecomp(500);
        context.fillRect(that.x, that.y, that.longeur, that.hauteur);
    } else {
        clearInterval(that.interval);
    }

}