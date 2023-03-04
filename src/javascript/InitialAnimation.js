import  gsap  from "gsap";
// import $ from 'jquery';
// import letteringJs from "lettering.js";
// import 'textillate';
// console.log($)
const init=()=>{

    let Section=document.querySelector("#initialAnime"); //section

    let tl=gsap.timeline();

    let elmCount=10;
    for(let i=0;i<elmCount;i++){
      let div=document.createElement("div");
      div.classList.add('transition-child');
      Section.appendChild(div);
    }
    tl.from("#salutation h3",{
        opacity:0,
        ease:"power1.inOut",

    })
    .to("#salutation h3",{
       y:"-100%",
       ease:"power1.inOut"
    })
    .to(Section.children,{
        y:"-100%",
        stagger:.05,
        ease:"power1.inOut",
        onStart:function(){
            // $(function () {
            //     $(Section.children).textillate();
            // })
        }
      },"-=.5")
    .set(Section,{
        display:"none"
    })
    .from("nav h3",{
        opacity:0,
        
    },'a')
    .from("#menuSvg",{
        opacity:0,
    },'a')
    .from("#hero .a-child",{
        y:"100%",
        stagger:.1,
        ease:"power1.inOut"
    })
    .from("#scroll div",{
        width:0
    })
    .from("#projects .heading-txt .a-child",{
        y:"100%",
        ease:"power1.inOut"
    })
    .from("#projects .heading-line",{
          width:0
    })
    .from("#projects .p-card .a-child",{
        y:"100%",
    })
    .from("#projects #bg-nm",{
        opacity:0
    })
}

export default init;