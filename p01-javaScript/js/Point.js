function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;

}
    Point.prototype.toString = function(){
         return 'Point(' + this.name + ',' + this.x + ',' + this.y + ')';
    }

    Point.prototype.name = 'Un POint';