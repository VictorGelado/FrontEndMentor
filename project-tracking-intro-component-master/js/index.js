const hamburger = document.getElementsByClassName('hamburger');
const navMenu = document.querySelector('.menu-right nav');

hamburger[0].addEventListener('click', () => {


  !navMenu.classList.contains('visible')? navMenu.classList.add('visible'): navMenu.classList.remove('visible');

  /* let right = window.getComputedStyle(navMenu, null).getPropertyValue("right"); */

  if (navMenu.classList.contains('visible')) {
    hamburger[0].setAttribute('src', './images/icon-close.svg');
  } else {
    hamburger[0].setAttribute('src', './images/icon-hamburger.svg');
  }
});

window.addEventListener('resize', () => {
  navMenu.classList.remove('visible');
  hamburger[0].setAttribute('src', './images/icon-hamburger.svg');
});