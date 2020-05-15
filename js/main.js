const selectAllElements = document.querySelectorAll('[data-select]');


selectAllElements.forEach(function (item) {
	item.addEventListener('click', function () {
		const realSelect = this.nextElementSibling;

		if (event.target.hasAttribute('data-item')) {
			const itemTitle = event.target.getAttribute('data-item');
			this.querySelector('[data-title]').textContent = event.target.getAttribute('data-item');
			this.querySelector('.header-select__dropdown').classList.toggle('hidden');

			if (realSelect) {
				realSelect.value = itemTitle;
			}

		} else {
			this.querySelector('.header-select__dropdown').classList.toggle('hidden');
		}
	})
});



// * Carousel ===============================
$(document).ready(function () {
	$("#carousel-header").owlCarousel({
		items: 1,
		nav: true,
		navText: [],
		loop: true
	});
});