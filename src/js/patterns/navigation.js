
	// Navigation

	import breakpoints from '../tools/mm';
	import mediaQuery from '../settings/mq';

	const	navIcon = document.querySelector('.js-navicon'),
			navCheck = document.querySelector('.js-navcheck');

	// Add styling to click icon

	navCheck.addEventListener("click", function() {
		if (navIcon.classList.contains('active')) {
			navIcon.classList.remove('active');
		} else {
			navIcon.classList.add('active');
		}
	});


	// Reset checkbox

	function resetCheckbox() {
		if ( !breakpoints(mediaQuery.smallTablet) ) {
			navCheck.checked = false;
			navIcon.classList.remove('active');
		}
	};

	window.addEventListener('resize', function() {
		resetCheckbox();
	});

	resetCheckbox();
