
	// Tools

	// Javascript Media Queries

	// import breakpoints from settings

	import mediaQuery from '../settings/mq';

	// function to check if window width matches the passed breakpoint

	const breakpoints = mq => (
		window.matchMedia(`(min-width: ${mq}px)`)
	);

	export default breakpoints;