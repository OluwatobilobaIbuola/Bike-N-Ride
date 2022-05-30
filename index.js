//footer DOM and Event
const footerDate = document.querySelector(".copyright");
const date = new Date().getFullYear();
footerDate.innerHTML = `&copy Copyright ${date}. All Right Reserve`;

//heady DOM and Event
const menuBtn = document.querySelector('.bar-container');
const hamburger = document.querySelector('.bar-container__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-container__list');

let showMenu = false;

menuBtn.addEventListener('click', function(){
    console.log("clicked")
    toggleMenu()
});

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}
// section dom and events
const sectionEl = document.querySelector(".footer");
const headyEl = document.querySelector(".heady");
const navLinks = document.querySelectorAll(".nav-container__link")
const logoEl = document.querySelector(".heady__logo")
const navContainer = document.querySelector(".nav-container")
const observerOption = {
  root:null,
}
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      headyEl.classList.remove("light-theme")
      navLinks.forEach(link => {
        link.classList.remove("light-theme")
      }) 
      logoEl.classList.remove("light-theme")
      navContainer.classList.remove("light-theme")
    } else {
      headyEl.classList.add("light-theme")
      navLinks.forEach(link => {
        link.classList.add("light-theme")
      }) 
      logoEl.classList.add("light-theme")
      navContainer.classList.add("light-theme")
    }
  })
}, observerOption)
scrollObserver.observe(sectionEl);
//fade-in dom
const fadersEl = document.querySelectorAll(".fader")
const fadersObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        fadersEl.forEach(fader => {
          fader.classList.remove("fade-in")
        }) 
      } else{
        fadersEl.forEach(fader => {
          fader.classList.add("fade-in")
        }) 
      }
    })
})

fadersEl.forEach(fade => {
  fadersObserver.observe(fade)
}) 



