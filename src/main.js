import 'remixicon/fonts/remixicon.css';
import './style/locomotive.scss';
import 'animate.css';

import './style/style.scss';
import './style/animationClasses.scss';
import './style/projects.scss';
import './style/about.scss';

import gsap from 'gsap';
// import LocomotiveScroll from 'locomotive-scroll';
import IntialAnimation from './javascript/InitialAnimation';
import ProjectAnimation from './javascript/projectAnimation';
import AboutAnimation from './javascript/AboutAnimation';
import { setContent } from './javascript/settingContent';
import {menuBtnToggle} from './javascript/menu';
import { splitByLine } from './javascript/TxtTagModifier';
import { wrapTxt } from './javascript/TxtTagModifier';
import {canvasParticles} from './javascript/canvas';
setContent(import.meta.url);
splitByLine();
wrapTxt();
menuBtnToggle();
ProjectAnimation ();
AboutAnimation();
IntialAnimation();
canvasParticles();
// console.log()
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

//to handle responsive part
window.addEventListener("resize",()=>{
    splitByLine()
})


// connect button hover animation 
document.querySelector(".btn").addEventListener("mouseenter",function(){
    gsap.to("#b-bg1",{
        top:0,
        duration:.5
    })
    gsap.to("#b-txt1",{
        top:"50%",
        duration:.5

    })
    gsap.to('#b-txt2',{
        y:"200%",
        duration:.5

    })
})
  
document.querySelector(".btn").addEventListener("mouseleave",function(){
    gsap.to("#b-bg1",{
        top:"100%",
        duration:.5

    })
    gsap.to("#b-txt1",{
        top:"-100%",
        duration:.5

    })
    gsap.to('#b-txt2',{
        y:"0",
        duration:.5

    })
})








