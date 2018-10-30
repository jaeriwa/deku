
	// Javascript Media Queries

	// Import media vars
	import mediaQuery from '../settings/mq';

	// media query change

	function breakpoints(mq) {
		const mql = window.matchMedia(`(min-width: ${mq}px)`);

		if (mql.matches) {
			return true;
		} else {
			return false;
		}
	}


	export default breakpoints;