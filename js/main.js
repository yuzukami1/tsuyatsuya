
function navSlide(){
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const cover = document.querySelector('.menu_cover');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click',()=>{
		// Toggle Nav
		nav.classList.toggle('nav-active');
		cover.classList.toggle('menu_cover_active');
		// Burger animation
		burger.classList.toggle('toggle');
	});

	cover.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');
		cover.classList.toggle('menu_cover_active');
		// Burger animation
		burger.classList.toggle('toggle');
	});
}

navSlide();
