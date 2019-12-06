class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    
    drawPoint(){
      

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.strokeStyle = 'black'
        ctx.stroke();
        
        
    }
}