import p5 from "p5";

export default function sketch(p: p5){
    let w:Walker;
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        w = new Walker(p);
    };
    
    p.draw = () => {

        p.stroke(0)
        p.fill(175)
        w.step()
        w.display()
        
    };
    
    window.onresize = () =>{
        p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
};
  
new p5(sketch);

class Walker{
    private x:number;
    private y:number;
    private p: p5
    constructor(p:p5){
        this.p = p
        this.x = p.width/2
        this.y = p.height/2
    }
    display(){
        this.p.stroke(0);
        this.p.point(this.x,this.y)
    }
    step(){
        // let stepX:number = Math.floor(Math.random() * 3) - 1
        let range:number = Math.random()
        
        if(range<0.5){
            this.moveTowardsTheMouse()
        }else if(range<0.6) {
            this.x++;
        }else if(range<0.7){
            this.x--;
        }else if(range<0.8){
            this.y++
        }else{
            this.y--;
        }
    }
    moveTowardsTheMouse(){
        if (this.x < this.p.mouseX) {
            this.x++;
        }else if (this.x > this.p.mouseX) {
            this.x--;
        }
        if (this.y < this.p.mouseY) {
            this.y++
        }else if (this.y > this.p.mouseY) {
            this.y--
        }
    }
}