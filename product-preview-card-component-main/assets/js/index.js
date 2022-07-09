const movePage = document.getElementById('move-page');

window.addEventListener('scroll', () => {
  var scroll = window.scrollY;
  var icon = movePage.children[0];

  if (scroll > 0) {
    icon.removeAttribute('class');
    icon.setAttribute('class', 'fa-solid fa-angle-up');
  } else {
    icon.removeAttribute('class');
    icon.setAttribute('class', 'fa-solid fa-angle-down');
  }
});

movePage.addEventListener('click', () => {
  var scroll = window.scrollY;
  
  if (scroll > 0) {
    window.scroll(0, 0);
  } else {
    window.scroll(0, 50)
  }
});