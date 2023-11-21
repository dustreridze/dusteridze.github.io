isMenuCities = false;

const open_cities = () => {
	let pick_city = document.querySelector('.pick-city');
	
	isMenuCities ? pick_city.classList.remove('active') : pick_city.classList.add('active');

	isMenuCities = !isMenuCities;
}
