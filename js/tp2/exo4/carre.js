function Carre(id,x, y, hauteur, longueur){
    this.id=id;
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

Carre.prototype.animer=function(that){
    console.log("animer ::", that);
    if (that.x < 400) {
        context.clearRect(that.x, that.y, that.longeur, that.hauteur);
        that.x += 10;
        context.fillRect(that.x, that.y, that.longeur, that.hauteur);
        //this.dessiner();
    } else {
        clearInterval(that.interval);
    }

}