var navMain = document.querySelector('.main-nav');
var navList = document.querySelector('.site-list');
var navToggle = document.querySelector('.main-nav__toggle');
var navwrap = document.querySelector('.main-nav__logo-wrapper');
var app = document.querySelector('.app');

navMain.classList.remove('main-nav--nojs');
app.classList.remove('app--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('site-list--closed')) {
    navList.classList.remove('site-list--closed');
    navList.classList.add('site-list--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navwrap.classList.add('main-nav__logo-wrapper--opened');
    navwrap.classList.remove('main-nav__logo-wrapper--closed');
    app.classList.add('app--opened');
    app.classList.remove('app--closed');
  } else {
    navList.classList.add('site-list--closed');
    navList.classList.remove('site-list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    navwrap.classList.remove('main-nav__logo-wrapper--opened');
    navwrap.classList.add('main-nav__logo-wrapper--closed');
    app.classList.remove('app--opened');
    app.classList.add('app--closed');
  }
  });
