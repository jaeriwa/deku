
	// Navigation

	import breakpoints from '../tools/mm';
	import mediaQuery from '../settings/mq';

	const	navIcon = document.querySelector('.js-navicon'),
			navCheck = document.querySelector('.js-navcheck');

	// Add styling to click icon by adding/removing an active class

	function addActive() {
		if (navIcon.classList.contains('active')) {
			navIcon.classList.remove('active');
		} else {
			navIcon.classList.add('active');
		}
	}

	// Reset checkbox so it doesn't retain mobile styling

	function resetCheckbox() {
		if ( breakpoints(mediaQuery.smallTablet) != true ) {
			navCheck.checked = false;
			navIcon.classList.remove('active');
		}
	};

	// Event listeners

	navCheck.addEventListener("click", addActive);

	window.addEventListener('resize', resetCheckbox );

	resetCheckbox();
