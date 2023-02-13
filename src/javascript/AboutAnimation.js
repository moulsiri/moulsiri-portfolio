import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AboutAnimation=()=>{
   const media=gsap.matchMedia();
media.add({
    isMobile:"(max-width:599px)",
    isDesktop:"(min-width:600px)"
},(context)=>{
    let {isMobile,isDesktop}=context.conditions;

    let Headingtl=gsap.timeline({
        scrollTrigger:{
            trigger:"#about .heading",
            start:isMobile?"top 42%":"top 62%",
            scrub:true,
            end:"top 20%",
          }
    })
    Headingtl
    .to("#about .heading-txt",{
        rotate:0,
        // duration:1,
        ease:"Power1.easeOut",     
    })
    .to("#about .heading h1",{
        y:-50,
        opacity:0,
        delay:1,
    })
    let contentTl=gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            start:isMobile?"top 42%":"top 60%",
            scrub:true,
            end:"top 5%",
          }
    })
    contentTl
    .from("#about .heading h1",{
        opacity:0
    })
    .from("#about .heading .heading-line",{
        width:0,
    })
    .from("#myImg img",{
        y:"100%",
        ease:"expo.inOut",
        duration:2,
        opacity:0
    })
    .from("#aContent .a-child",{
        y:"100%"
    })

    let contactTl=gsap.timeline({
        scrollTrigger:{
            trigger:"#contact",
            start:isMobile?"top 42%":"top 60%",
            scrub:true,
            // markers:true,
            end:"top 40%",
          }
    })
    contactTl.from("#cLft h1 .a-child",{
        y:'100%',
        opacity:0
    })
    .from("#cLft p .a-child",{
        y:'100%',
        opacity:0
    })


    
}) 
}

export default AboutAnimation;