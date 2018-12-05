
	// Tools

	// Adds and removes active class as it comes in view
	// Use this with the debounce tool on scroll

	function inView(element){
		const isActive = window.scrollY + window.innerHeight - element.offsetHeight / 2,
				slideBottom = element.offsetTop + element.offsetHeight,
				isHalfShown = isActive > element.offsetTop,
				isNotScrolledPast = window.scrollY < slideBottom;

		if(isHalfShown && isNotScrolledPast) {
			element.classList.add('active');
		} else {
			element.classList.remove('active');
		}
	}

	export default inView;