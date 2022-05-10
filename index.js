//title DOM
const titleSection = document.querySelector("#title");
let backgroundInterval;

//footer DOM
const footerDate = document.querySelector(".copyright");
const date = new Date().getFullYear();
footerDate.innerHTML = `&copy Copyright ${date}. All Right Reserve`;

//features sectionobserver  DOM 
const headerEl = document.querySelector("header")
const footerEl = document.querySelector("#footer")
const navEl = document.querySelectorAll(".anchor-link")
const logoEl = document.querySelector(".anchor-link-logo")
const footerOptions = {
  threshold:0.40
};

//intro sectionobserver DOM
const fader = document.querySelector(".fade-in");
const faderOptions = {};

//navbar DOM
const barsEl = document.querySelectorAll(".bar");
const navBarEl = document.querySelector(".navbar-item");
const navbarLinkToggle = document.querySelector(".navbar-link-toggle");


//carousel DOM
const tracks = document.querySelector(".carousel-track")
const slides = Array.from(tracks.children)
const prevBtn = document.querySelector(".carousel-btn-left")
const nextBtn = document.querySelector(".carousel-btn-right")
const dotNav = document.querySelector(".carousel-nav")
const dots = Array.from(dotNav.children)
const slideWidth = slides[0].getBoundingClientRect().width
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px"; 
}
slides.forEach(setSlidePosition)


backgroundInterval = setInterval (function () { 
    const num = Math.floor((Math.random() * 4) + 1)
    titleSection.style.backgroundImage = `url(css/bike${num}.jpg)`
},5000)



//carousel slide event 

const moveSlide = (tracks, activeSlide, targetSlide) => {
  const amountToMove = targetSlide.style.left;
  tracks.style.transform = `translateX(-${amountToMove})`;
  activeSlide.classList.remove("active");
  targetSlide.classList.add("active");
}

const updateDot = (activeDot, targetDot) => {
  activeDot.classList.remove("active");
  targetDot.classList.add("active");
}

const hideShowArrows = (prevBtn, nextBtn, dots, targetIndex) => {
  if(targetIndex === 0){
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden")
  } else if (targetIndex === dots.length - 1){
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden")
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden")
  }
}

prevBtn.addEventListener("click", e => {
  const activeSlide = tracks.querySelector(".active");
  const prevSlide = activeSlide.previousElementSibling;
  const activeDot = dotNav.querySelector(".active");
  const prevDot = activeDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide)

  moveSlide(tracks, activeSlide, prevSlide);
  updateDot(activeDot, prevDot);
  hideShowArrows(prevBtn, nextBtn, dots, prevIndex)
})


nextBtn.addEventListener("click", e => {
  const activeSlide = tracks.querySelector(".active");
  const nextSlide = activeSlide.nextElementSibling;
  const activeDot = dotNav.querySelector(".active");
  const nextDot = activeDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide)

  moveSlide(tracks, activeSlide, nextSlide);
  updateDot(activeDot, nextDot);
  hideShowArrows(prevBtn, nextBtn, dots, nextIndex)
})

dotNav.addEventListener("click", e => {
  const targetDot = e.target.closest("button")

  if (!targetDot) return;

  const activeSlide = tracks.querySelector(".active");
  const activeDot = dotNav.querySelector(".active");
  const targetIndex = dots.findIndex(index => index === targetDot);
  const targetSlide = slides[targetIndex];

  moveSlide(tracks, activeSlide, targetSlide);
  updateDot(activeDot, targetDot);
  hideShowArrows(prevBtn, nextBtn, dots, targetIndex)

})


//navbar toggle event 

navbarLinkToggle.addEventListener("click", function (x){
  navBarEl.classList.toggle("navbar-toggleshow")
  barsEl.forEach(bar => {
      bar.classList.add("appear");
  });
  if (x.target.classList.contains("bar")){
        x.target.classList.remove("appear")
      }
})

//intro sectionobserver 
const faderObserver = new IntersectionObserver(function(entries){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      entry.target.classList.remove("appear")
    } else {
      entry.target.classList.add("appear")
    }
  })
}, faderOptions)

faderObserver.observe(fader)

//footer sectionobserver
const headerObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        headerEl.classList.remove("head-toggle");
        navEl.forEach(anchor => {
        anchor.classList.remove("nav-toggle")
        })
        logoEl.classList.remove("nav-toggle")
      } else {   
        headerEl.classList.add("head-toggle");
        navEl.forEach(anchor => {
        anchor.classList.add("nav-toggle")
        })
        logoEl.classList.add("nav-toggle")
    } 
    })
    
}, footerOptions)

headerObserver.observe(footerEl)



  