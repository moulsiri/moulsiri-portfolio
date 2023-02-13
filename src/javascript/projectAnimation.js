import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProjectAnimation=()=>{
   const media=gsap.matchMedia();
media.add({
    isMobile:"(max-width:599px)",
    isDesktop:"(min-width:600px)"
},(context)=>{
    let {isMobile,isDesktop}=context.conditions;
    let headingTl=gsap.timeline({
        scrollTrigger:{
            trigger:"#projects .heading",
            start:isMobile?"top 50%":"top 80%",
            scrub:true,
            end:isMobile?"top 22%":"top 32%"
          } 
    })
    headingTl
    .to("#projects .heading-line",{
        width:0,
    })
    .to("#projects .heading-txt",{
        rotate:-90,
        duration:1,
        ease: 'Power1.easeOut',
            
    })
    .to("#projects .heading-line",{
        width:"10em",
    },"+=3")
    let pCards=gsap.utils.toArray(".p-card");
    pCards.forEach((card,i)=>{
        if(i===0 && isMobile){
           
        }else{
            let pLeft=card.children[0].children[0];
            let pRight=card.children[1];
            let bgTxt=pLeft.children[0].children[0];
            let paragraphs=gsap.utils.toArray(card.getElementsByClassName("a-child"));
            let iTags=gsap.utils.toArray(card.querySelectorAll('.p-tech i'));
            // console.log(iT)
            let tl=gsap.timeline({
                scrollTrigger:{
                    trigger:card,
                    start:isMobile?"top 80%":"top 70%",
                    end:"top 20%",
                    scrub:true
                }
            })
            tl
            .from(paragraphs,{
                y:'100%',
                duration:1,
                ease:'expo.easeOut',
                opacity:0
            
            },'a')
            .from(pRight.children[0].children[0],{
                  height:0,
                  duration:1,
                  ease:'Power3.easeOut',
            },'a')
            .from(pLeft.querySelector("#bg-nm"),{
                opacity:0
            })
           
        }
    if(isDesktop){
        let pImgs=document.getElementsByClassName("p-img-container");
    for(let i=0;i<pImgs.length;i++){
        let links=gsap.utils.toArray(pImgs[i].querySelectorAll(".p-action-div"));

    pImgs[i].addEventListener("mouseenter",function(){
        let tl=gsap.timeline();
        tl.set(pImgs[i].children[1],{
            display:"flex"
        })
        .to(pImgs[i].children[1],{
            top:"0%",
        })
    })
    pImgs[i].addEventListener("mouseleave",function(elm){
        let tl=gsap.timeline();
        tl
        .to(pImgs[i].children[1],{
            top:"100%"
        })
        .set(pImgs[i].children[1],{
            display:"none"
        })

    })
     }
    }
        
        
       
    }) 
}) 



}

export default ProjectAnimation;
