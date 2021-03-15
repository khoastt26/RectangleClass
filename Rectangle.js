let Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    }
    this.getPerimeter = function() {
        return (this.width + this.height)*2;
    }

}