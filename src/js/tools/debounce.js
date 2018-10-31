
	// Tools

	// Tool to debounce events on scroll, resize, etc. so they don't continuously fire
	// and slow performance speed

	const debounce = (func, delay) => {
		let inDebounce;

		return function() {
			const 	context = this,
					args = arguments;

			clearTimeout(inDebounce);

			inDebounce = setTimeout(() => func.apply(context, args), delay);
		}
	}

	export default debounce;