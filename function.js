let body=document.querySelector("body")
let timeline1=document.querySelector(".timeline1")
let timeline2=document.querySelector(".timeline2")
let year=document.querySelector(".year")
let year1=document.querySelector(".year1")
window.addEventListener("scroll",function(){
    if(scrollY>1000 && scrollY<1400){
        timeline1.style.color="#28E98C"
        year.style.color="#28E98C"
    }
    else{
        timeline1.style.color="#898989"
        year.style.color="#898989"
    }
    if(scrollY>1200 && scrollY<1800){
        timeline2.style.color="#28E98C"
        year1.style.color="#28E98C"
    }
    else{
        timeline2.style.color="#898989"
        year1.style.color="#898989"
    }
})
let Home=document.querySelector(".Home")
let About=document.querySelector(".About")
let Resume=document.querySelector(".Resume")
let Services=document.querySelector(".Services")
let Skills=document.querySelector(".Skills")
let Portfolio=document.querySelector(".Portfolio")
let Contact=document.querySelector(".Contact")
window.addEventListener("scroll",function(){
   if( scrollY<700){
    Home.style.color="#28E98C"
   }
   else{
    Home.style.color="#898989"
   }
   if( scrollY>800 && scrollY<1200){
    About.style.color="#28E98C"
   }
   else{
    About.style.color="#898989"
   }
   if( scrollY>1200 && scrollY<2000){
    Resume.style.color="#28E98C"
   }
   else{
    Resume.style.color="#898989"
   }
   if( scrollY>2000 && scrollY<3000){
    Services.style.color="#28E98C"
   }
   else{
    Services.style.color="#898989"
   }
   if( scrollY>3000 && scrollY<3700){
    Skills.style.color="#28E98C"
   }
   else{
    Skills.style.color="#898989"
   }
   if( scrollY>3700 && scrollY<7000){
    Portfolio.style.color="#28E98C"
   }
   else{
    Portfolio.style.color="#898989"
   }
   if( scrollY>7000){
    Contact.style.color="#28E98C"
   }
   else{
    Contact.style.color="#898989"
   }

})
Home.addEventListener("click",function(){
   window.scrollTo(0,0)
})
About.addEventListener("click",function(){
    window.scrollTo(0,900)
 })
 Resume.addEventListener("click",function(){
    window.scrollTo(0,1400)
 })
 Services.addEventListener("click",function(){
    window.scrollTo(0,2300)
 })
 Skills.addEventListener("click",function(){
    window.scrollTo(0,3100)
 })
 Portfolio.addEventListener("click",function(){
    window.scrollTo(0,4100)
 })
 Contact.addEventListener("click",function(){
    window.scrollTo(0,7700)
 })
 let hamber=document.querySelector("#hamber")
let prevScrollPos = window.pageYOffset;
 window.addEventListener("scroll",function(){
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
    hamber.style.opacity="1"
    } else {
      // Scrolling down
      hamber.style.opacity="0.8";
    }

    prevScrollPos = currentScrollPos;
  
 })
 let home11=document.querySelector(".home11")
 let about11=document.querySelector(".about11")
 let Resume11=document.querySelector(".Resume11")
 let Services11=document.querySelector(".Services11")
 let Skills11=document.querySelector(".Skills11")
 let Portfolio11=document.querySelector(".Portfolio11")
 let Contact11=document.querySelector(".Contact11")
 