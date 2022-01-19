
//=================-vanill_js-===================//
// Burger menu
let burger = document.querySelector(".icon-menu");
let container = document.querySelector(".header__container");
let body = document.querySelector("body");
burger.addEventListener('click', function(evt){
	burger.classList.toggle('active');
	container.classList.toggle('active');
	body.classList.toggle('lock');
})

