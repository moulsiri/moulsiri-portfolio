//menu toggle
import gsap from 'gsap';

export const menuBtnToggle=()=>{
    //Elements for menu
    let menuSection=document.querySelector("#menuSection"); //section
    let menuBtn=document.querySelector("#menu"); //menu button that will toggle
    let menuTxtDiv=menuBtn.children[0];//menu button txt
    let paths=menuBtn.children[1].children; //menu button svg
    let mToggle=false;
  
    let elmCount=10;
    for(let i=0;i<elmCount;i++){
      let div=document.createElement("div");
      div.classList.add('transition-child');
      div.style.transform='translate(0,100%)'
      menuSection.appendChild(div);
    }
  
  
    function offMenuBtn(){
      document.body.style.overflow="visible"
    let menuBtnTl=gsap.timeline({
      paused:true
    });
    menuContent.reverse()
       menuBtnTl
      .to(paths[0],{
        attr:{d:"M10,2 L2,2"}
      },'a')
      .to(paths[2],{
        attr:{d:"M10,8 L2,8"}
      },'a')
      .to(paths[1],{
        opacity:1
      },'a')
      .to(menuTxtDiv.children[0],{
        y:'0%'
      },'a')
      .to(menuTxtDiv.children[1],{
        top:"-100%"
      },'a')
      .to(paths,{
        stroke:"#28231D",
        duration:1
      },'b')
      .to(menuTxtDiv.children,{
        color:"#28231D",
        duration:1
      },'b')
      .to(menuSection.children,{
        y:"-100%",
        stagger:.05,
        ease:"power1.inOut",
      },'b')
      .set(menuSection,{
        display:'none'
      })
   
      if(menuContent.reversed()){
        menuBtnTl.play()
      }
  
     
      
  
    }
    function onMenuBtn(){
      document.body.style.overflow="hidden"

      let menuBtnTl=gsap.timeline();
      menuBtnTl
      .set(menuSection,{
        display:'flex'
      })
      .to(paths[0],{
        attr:{d:"M8,2 L2,8"}
      },'c')
      .to(paths[2],{
        attr:{d:"M8,8 L2,2"}
      },'c')
      .to(paths[1],{
        opacity:0
      },'c')
      .to(menuTxtDiv.children[0],{
        y:'100%'
      },'c')
      .to(menuTxtDiv.children[1],{
        top:"0%"
      },'c')
      .to(paths,{
        stroke:"#fff",
        duration:1
      },'d')
      .to(menuTxtDiv.children,{
        color:"#fff",
        duration:1
      },'d')
      .to(menuSection.children,{
        y:"0%",
        stagger:.05,
        ease:"power1.inOut",
        onUpdate:()=>{
          menuContent.play();
        }
      },'d')
      
      
    }
  
    menuBtn.addEventListener("click",function(e){
      if(mToggle){
       offMenuBtn()
        mToggle=!mToggle
      }else{
        onMenuBtn()
        mToggle=!mToggle
      }
    })
    document.querySelectorAll("#mLft ul a").forEach((aTag)=>{
      aTag.addEventListener("click",()=>{
        offMenuBtn();
        mToggle=!mToggle;
  
      })
    })
    let menuContent=gsap.timeline({
      paused:true
    });
  menuContent.from("#mLft ul li h2",{
    y:"100%",
    ease:'expo.inOut',
    // duration:.5,
    stagger:.1
  })
  .from("#mLft ul li span",{
    opacity:0,
    y:"100%",
    stagger:.09
  
  },'f')
  .from(".m-link-txt h3",{
    opacity:0,
    y:"100%",
    ease:'expo.inOut'
    
  },'f')
  .from(".m-links a",{
    opacity:0,
    x:50,
    ease:"power2.out",
    stagger:{
      from:'edges',
      amount:.1
    }
  },'f')
  .from(".m-bg-heading",{
    opacity:0
  },'f')
}