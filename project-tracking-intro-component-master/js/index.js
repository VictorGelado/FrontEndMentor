const hamburger = document.getElementsByClassName('hamburger');
const navMenu = document.querySelector('.menu-right nav');

hamburger[0].addEventListener('click', () => {


  !navMenu.classList.contains('visible')? navMenu.classList.add('visible'): navMenu.classList.remove('visible');

  /* let right = window.getComputedStyle(navMenu, null).getPropertyValue("right"); */

  const visible = 'opacity: 1; right: 0;';
  const hidden = 'opacity: 0; right: -450px;';

  navMenu.classList.contains('visible')? navMenu.style = visible: navMenu.style = hidden;
});