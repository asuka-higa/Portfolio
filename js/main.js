'use strict';

{
  /*****************
    hamburger-menu
  ******************/

  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const dots1 = document.querySelector('.hamburger-icon-dots1');
  const dots2 = document.querySelector('.hamburger-icon-dots2');
  const nav = document.querySelector('.header-nav');

  hamburgerIcon.addEventListener('click', function () {
    dots1.classList.toggle('active');
    dots2.classList.toggle('active');
    nav.classList.toggle('open');
  });

  addEventListener('click', function () {
    // あとで処理を書くところ
  });

}