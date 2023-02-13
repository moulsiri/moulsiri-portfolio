import { projects } from "../json/projects";
import { icons } from "../json/icons";
import { projectPic } from "../json/images";
// const getAssetSrc = (name) => {
//   const path = `/src/assets/${name}`;
//   const modules = import.meta("/src/assets/*", { eager: true });
//   // const mod = modules[path] as { default };
//   console.log(modules)
//   // return mod.default;
// };
export const setContent=(imgPathLink)=>{
// setting contents  
const setMenuContent=()=>{
    const arr=['home',"about","projects","contact"];
      let tmp='';
      arr.forEach((elm,i)=>{
        tmp+=`<a href='#${elm}'><li>
        <span>0${i+1}</span>
        <h2 data-txt=${elm}>${elm}</h2>
        </li>
        </a>`
      })
      document.querySelector("#mLft ul").innerHTML=tmp
    }
  const setMeLinks=()=>{
      const sites={
        "github":"https://github.com/moulsiri" ,
        "linkedin":"https://www.linkedin.com/in/moulsiri-awasthi-8395261a6",
        "instagram":"https://www.instagram.com/moul.siri/",
        "dribbble":"https://dribbble.com/moulsiri/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22moulsiri%22&utm_content=%22About+moulsiri%22&utm_medium=Social_Share&utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22moulsiri%22&utm_content=%22About%20moulsiri%22&utm_medium=Social_Share"
        }
      let tmp=''
      let arr=Object.keys(sites)
      arr.forEach((elm,i)=>{
        tmp+=`<a 
        href=${sites[elm]} 
        target='_blank' 
        data-link=${elm}
        >
    <i class='ri-${elm}-line'
    data-index="0"
    ></i></a>`
    
      })
      document.querySelector("#mRt .m-links").innerHTML=tmp
    }
  const setProjectCards=()=>{
      let tmp="";
      projects.forEach((elm,i)=>{
        tmp+=` <div class="${(i%2==0)?'p-card':'p-card p-card-reverse'}" >
        <div class="p-card-lft">
            <div class="p-info-container">
                <h1><span id="bg-nm">0</span><span class='a-parent'> <span class='a-child'>${i+1}</span></span></h1>
                <div class="p-txt">
                        <h2 class="wrap-txt">${elm.name}</h2>
                        <div>   
                        <p class="split-by-line">${elm.description}</p>
                        <div class="p-tech">
                        <div>
                        ${
                          elm.tech.map((e)=>{
                            return icons[e]
                          }).join("")
                        }
                        </div>
                        <h3>Technology used</h3>
                        </div>
                        </div>
                    </div> 
                </div>
                
        </div>
        <div class="p-card-rt">
            <div class="p-img-container">
                <div class="p-img">
                    <img src=${projectPic[elm.img]} alt="">
                </div>
                <div class="p-ovly">
                <a href=${elm.liveLink} target='_blank'>
                <div class="p-action-div" data-name="live project">
                      <i class="ri-rocket-2-fill"></i>
                    </div>
                </a>
                <a href=${elm.githubLink}  target='_blank'>
                <div class="p-action-div" data-name="github repo">
                <i class="ri-github-line"></i>
                </div>
                </a> 
                   
                </div>
            </div>
    
        </div>
    
    </div>`
      })
      document.querySelector("#pContent").innerHTML=tmp
    }
  const setContactLinks=()=>{
      const sites={
        "github":"https://github.com/moulsiri" ,
        "linkedin":"https://www.linkedin.com/in/moulsiri-awasthi-8395261a6",
        "instagram":"https://www.instagram.com/moul.siri/",
        "dribbble":"https://dribbble.com/moulsiri/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22moulsiri%22&utm_content=%22About+moulsiri%22&utm_medium=Social_Share&utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22moulsiri%22&utm_content=%22About%20moulsiri%22&utm_medium=Social_Share"
        }
      let arr=Object.keys(sites);
      let tmp="";
      arr.forEach((elm)=>{
        tmp+=`<a 
        href=${sites[elm]} 
        target='_blank' 
        data-link=${elm}
        >
    <i class="ri-${elm}-line"
    data-index="0"
    ></i></a>`
      })
      document.querySelector("#cLinks").innerHTML=tmp
    }
    setContactLinks()
    setProjectCards()
    setMenuContent()
    setMeLinks()
}

// <button class="p-link-btn">
// visit repository
// </button>
// <button class="p-link-btn">
// live project
// </button>
{/* <h3 class="wrap-txt">Live Project </h3> */}
{/*  */}