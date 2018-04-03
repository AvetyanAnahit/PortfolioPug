console.log('hello from module');

var menu__hamburger = document.querySelector(".menu__hamburger");
console.log(menu__hamburger);
menu__hamburger.addEventListener("click", function() {    
  var mobilemenu__content = document.querySelector(".full-screen__list");
  console.log(mobilemenu__content.classList, '.full-screen__-list.classList');
  if(menu__hamburger.classList.contains("menu__hamburger_active")) {
    menu__hamburger.classList.remove("menu__hamburger_active");
    mobilemenu__content.classList.remove("active");
  } else {
    menu__hamburger.classList.add("menu__hamburger_active");
    mobilemenu__content.classList.add("active");
  }
});
