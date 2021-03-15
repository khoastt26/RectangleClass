
let Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    }
    this.getPerimeter = function() {
        return (this.width + this.height)*2;
    }
    function DrawRectangle() {
        for(let i = 1;i <= width; i++) {
            for(let j = 1; j <= height; j++) {
                if(i == 1|| i == width || j==1 || j==height){
                    document.write('* ');
                }else{
                    document.write("&nbsp;&nbsp; ");                                
                }                                   
                           
            }
            document.write('<br>');        
        }
    }
    DrawRectangle();
}
        

