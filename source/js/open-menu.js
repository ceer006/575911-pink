var navMain = document.querySelector('.main-nav');
var navList = document.querySelector('.site-list');
var navToggle = document.querySelector('.main-nav__toggle');
var navwrap = document.querySelector('.main-nav__logo-wrapper');
var pageheaderwrap = document.querySelector('.page-header__wrapper');

navMain.classList.remove('main-nav--nojs');
pageheaderwrap.classList.remove('page-header__wrapper--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('site-list--closed')) {
    navList.classList.remove('site-list--closed');
    navList.classList.add('site-list--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navwrap.classList.add('main-nav__logo-wrapper--opened');
    navwrap.classList.remove('main-nav__logo-wrapper--closed');
    pageheaderwrap.classList.add('page-header__wrapper--opened');
    pageheaderwrap.classList.remove('page-header__wrapper--closed');

  } else {
    navList.classList.add('site-list--closed');
    navList.classList.remove('site-list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    navwrap.classList.remove('main-nav__logo-wrapper--opened');
    navwrap.classList.add('main-nav__logo-wrapper--closed');
    pageheaderwrap.classList.remove('page-header__wrapper--opened');
    pageheaderwrap.classList.add('page-header__wrapper--closed');
  }
  });
