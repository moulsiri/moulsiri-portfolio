export const canvasParticles=()=>{
    const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let spots=[];
const mouse={
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove',function(e){
    mouse.x=e.x;
    mouse.y=e.y;
    for(let i=0;i<3;i++){
        spots.push(new Particle())
    }
})

class Particle{
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        this.size=Math.random()*50+0.1;
        this.speedX=Math.random()-1;
        this.speedY=Math.random()-1;
        this.color="#FFDB58";
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.size>0.1)this.size-=0.3;
    }
    draw(){
        ctx.beginPath();
        ctx.stokeStyle=this.color;
        ctx.lineWidth=this.size
        ctx.moveTo(this.x,this.y);
        this.update()
        ctx.lineTo(this.x,this.y);
        ctx.stroke();
    }
}

function handleParticle(){
    for(let i=0;i<spots.length;i++){
        spots[i].update();
        spots[i].draw();
        for(let j=i;j<spots.length;j++){
            const dx=spots[i].x-spots[j].x;
            const dy=spots[i].y-spots[j].y;
            const distance=Math.sqrt(dx*dx+dy*dy);
            // console.log(distance)
            if(distance<90){
                ctx.beginPath();
                ctx.strokeStyle=spots[i].color;
                ctx.lineWidth=spots[i].size/10;
                ctx.moveTo(spots[i].x,spots[i].y);
                ctx.lineTo(spots[i].x,spots[i].y);
                ctx.stroke();
            }
           
        }
        if(spots[i].size<=0.3){
            spots.splice(i,1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticle();
    window.requestAnimationFrame(animate);
}

window.addEventListener("resize",function(){
    canvas.width=this.innerWidth;
    canvas.height=this.innerHeight;

})
window.addEventListener('mouseout',function(){
    mouse.x=undefined;
    mouse.y=undefined;
})
animate();
}