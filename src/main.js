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
document.querySelectorAll(".btn").forEach(elm=>elm.addEventListener("mouseenter",function(){
    let bg1=elm.querySelector('#b-bg1');
    let txt1=elm.querySelector('#b-txt1');
    let  txt2=elm.querySelector('#b-txt2');
    gsap.to(bg1,{
        top:0,
        duration:.5
    })
    gsap.to(txt1,{
        top:"50%",
        duration:.5

    })
    gsap.to(txt2,{
        y:"200%",
        duration:.5

    })
}))
  
document.querySelectorAll(".btn").forEach(elm=>elm.addEventListener("mouseleave",function(){
    let bg1=elm.querySelector('#b-bg1');
    let txt1=elm.querySelector('#b-txt1');
    let  txt2=elm.querySelector('#b-txt2');
    gsap.to(bg1,{
        top:"100%",
        duration:.5

    })
    gsap.to(txt1,{
        top:"-100%",
        duration:.5

    })
    gsap.to(txt2,{
        y:"0",
        duration:.5

    })
}))








