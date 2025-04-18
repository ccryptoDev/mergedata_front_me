import { useEffect, useRef } from 'react';

const useClickOutside = callback => {
	const ref = useRef();

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [callback]);

	return ref;
};

export default useClickOutside;
