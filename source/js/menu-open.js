var menuBtn = document.querySelector(".main-nav__toggler span");
var menuBtnWrap = document.querySelector(".main-nav__toggler");
var menu = document.querySelector(".main-nav__list");

menuBtnWrap.classList.toggle("main-nav__toggler--active");
menu.classList.toggle("main-nav__list--visible");

menuBtn.addEventListener("click", function() {
  menuBtnWrap.classList.toggle("main-nav__toggler--active");
  menu.classList.toggle("main-nav__list--visible");
});
