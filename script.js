let loader=document.querySelector(".loader")


setTimeout(function(){
loader.style.top="-110%"
},2000)


let oat =document.querySelector(".oat")
let salmon =document.querySelector(".salmon")
let Sushi =document.querySelector(".Sushi")
let imgchanger=document.querySelector(".page3-img-parent")
let graph=document.querySelector(".page3-bottom-right-graph")
let numberchanger= document.querySelector(".number-changer")
let Dexterchanger= document.querySelector(".Dexter-number-changer")

salmon.addEventListener("click",function(){
    oat.style.backgroundColor="transparent";
    salmon.style.backgroundColor="lightgrey"
    Sushi.style.backgroundColor="transparent";
    imgchanger.style.transform="translateY(0%)";
    graph.style.transform="translateY(0%)";
    numberchanger.style.transform="translateY(0%)";
    Dexterchanger.style.transform="translateY(0%)";
    

})
oat.addEventListener("click",function(){
    oat.style.backgroundColor="lightgrey";
    salmon.style.backgroundColor="transparent"
    Sushi.style.backgroundColor="transparent";
    imgchanger.style.transform="translateY(-100%)"
    graph.style.transform="translateY(-100%)";
    numberchanger.style.transform="translateY(-110%)";
    Dexterchanger.style.transform="translateY(-100%)";



})
Sushi.addEventListener("click",function(){
    oat.style.backgroundColor="transparent";
    salmon.style.backgroundColor="transparent"
    Sushi.style.backgroundColor="lightgrey";
    imgchanger.style.transform="translateY(-200%)"
    graph.style.transform="translateY(-200%)";
    numberchanger.style.transform="translateY(-220%)";
    Dexterchanger.style.transform="translateY(-220%)";

})


// let container=document.querySelector(".moving-container-hold")
// let left=document.querySelector(".moving-container-hold-left")

// container.addEventListener("scroll",function(){
//     left.style.transform="translateY(-100%)"
// })

let tl=gsap.timeline();


tl.from(".page1-img",{
    width:"20%",
    delay:3,
    duration:1
})
tl.from(".text-div h1",{
    opacity:0,
})
tl.from(".text-div h5",{
    opacity:0,
})
tl.from(".button",{
    opacity:0,
})
// gsap.from(".page2-top h2",{
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:"body",
//         start:"top 20%",
//     },
//     opacity:0,
// })

gsap.from(".page2-top h1",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 20%",
    },
    opacity:0,
    delay:0.5,
})
gsap.from(".page4-top h1",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 20%",
    },
    opacity:0,
})
$('.page4-top h1').textillate({ in: { effect: 'fadeInLeft' } });


gsap.from(".page4-top h6",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 20%",
    },
    opacity:0,
    delay:0.2,
})
gsap.from(".page4-center-left",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 20%",
    },
    x:-600,
    duration:2,
})
gsap.from(".page4-center-right",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 20%",
    },
    x:600,
    duration:2,
})
gsap.from(".page7 h1",{
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        start:"top 20%",
    },
    opacity:0,
})
gsap.from(".page7 h3",{
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        start:"top 20%",
    },
    opacity:0,
    delay:0.2
})
