import p5 from "p5";

export default function sketch(p:p5){
    let randomCounts: number[]
    p.setup = () => {
        p.createCanvas(640, 240);
        randomCounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    }
    p.draw = ()=>{
        p.background(255);

        let index = Math.floor(Math.random() * randomCounts.length);
        randomCounts[index]++;

        p.stroke(0)
        p.fill(175)

        let w = p.width / randomCounts.length;
        for (let x = 0; x < randomCounts.length; x++) {
            p.rect(x*w, p.height-randomCounts[x], w-1, randomCounts[x]);
        }
    }
    window.onresize = () =>{
        p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
}