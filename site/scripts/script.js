let navList = document.querySelector('.navigation__list');
let closeBut = document.querySelector('.navigation__close-burger');
let paX = document.querySelector('.navigation__link--padding-x');
let child = document.querySelectorAll('.navigation__item:nth-of-type(2n)');
document.querySelector('.navigation__burger').onclick = function(){
    navList.classList.add('active');
    paX.style.display = "none";
    closeBut.style.display = "block";
    child.forEach((e)=>{
        e.style.display="none";
    })
}
closeBut.onclick= function(){
    closeBut.style.display = "none";
    navList.classList.remove('active');
    paX.style.display = "block";
    child.forEach((e)=>{
        e.style.display="block";
    })
}

$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  gsap.from(".navigation__list", {duration: 2, y: -50, opacity: 0, scale: 0.2});
  if (window.matchMedia("(min-width: 769px)").matches) {
  gsap.from("#anim1-1",{
    scrollTrigger: {
        trigger: "#anibox1",
        start: "top center",
        onEnter: () => gsap.to("#anibox1", {backgroundColor: "#ffffff"})
    },
    x: -2000,
    duration: 1.5,
    opacity: 0.1,
    backgroundColor: "#f7f7f7"
  })
  gsap.from("#anim1-2",{
    scrollTrigger: {
        trigger: "#anibox1",
        start: "to center",
  },
    y: -500,
    duration: 1.5,
    opacity: 0.1,
    "--myColor": "#f7f7f7"
  })
  gsap.from("#anim1-3",{
    scrollTrigger: {
        trigger: "#anibox1",
        start: "to center"
    },
    x: 1000,
    duration: 1.5,
    opacity: 0.1,
    "--myColor": "#f7f7f7"
  })

//second-action

  gsap.from("#anim2-1",{
    scrollTrigger: {
        trigger: "#anibox2",
        start: "to center",
        onEnter: () => gsap.to("#anibox2", {backgroundColor: "#ffffff"})
    },
    x: 2000,
    duration: 1.5,
    opacity: 0.1,
   
  })
  gsap.from("#anim2-2",{
    scrollTrigger: {
        trigger: "#anibox2",
        start: "to center"
  },
    y: -500,
    duration: 1.5,
    opacity: 0.1,
    "--myColor": "#f7f7f7"
  })
  gsap.from("#anim2-3",{
    scrollTrigger: {
        trigger: "#anibox2",
        start: "to center"
    },
    x: -1000,
    duration: 1.5,
    opacity: 0.1,
    "--myColor": "#f7f7f7"
  })


//third-action
gsap.from("#anim3-1",{
  scrollTrigger: {
      trigger: "#anibox3",
      start: "to center",
      onEnter: () => gsap.to("#anibox3", {backgroundColor: "#ffffff"})
  },
  x: 4000,
  duration: 1.5,
  opacity: 0.1,
 
})
gsap.from("#anim3-2",{
  scrollTrigger: {
      trigger: "#anibox3",
      start: "to center"
},
  y: -500,
  duration: 1.5,
  opacity: 0.1,
  "--myColor": "#f7f7f7"
})
gsap.from("#anim3-3",{
  scrollTrigger: {
      trigger: "#anibox3",
      start: "to center"
  },
  y: 1000,
  duration: 1.5,
  opacity: 0.1,
  "--myColor": "#f7f7f7"
})
gsap.from("#anim3-4",{
  scrollTrigger: {
      trigger: "#anibox3",
      start: "to center"
  },
  x: -4000,
  duration: 1.5,
  opacity: 0.1,
  "--myColor": "#f7f7f7"
})
  }
