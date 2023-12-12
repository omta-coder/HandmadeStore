const menu = document.querySelector("#menubar");
const navbar = document.querySelector("#navbar");
const header = document.querySelector("#header2");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    console.log("clicked")
});

window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 150){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
}

var tl = gsap.timeline()
tl.from("#header1 img,#header1 a",{
    y:-200,
    duration:1,
    opcity:0,
})