import p5 from "p5";

export default function sketch(p:p5){
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(255)
    }
    p.draw = ()=>{
        let sd = p.width/8;
        let mean = p.width/2
        let num = p.randomGaussian(mean, sd);
        p.noStroke();
        p.fill(0, 10);
        p.ellipse(num, p.height/2 ,16,16)
    }
    window.onresize = () =>{
        p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
}