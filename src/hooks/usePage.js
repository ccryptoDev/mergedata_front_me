import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePage = () => {
	const [previousState, setPreviousState] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.state) {
			const newState = Object.assign({}, location.state);
			delete newState.previousState;
			setPreviousState(newState);
			localStorage.setItem('stateMergeData', JSON.stringify(newState));
		} else {
			const stateMergeData = JSON.parse(localStorage.getItem('stateMergeData'));
			stateMergeData && setPreviousState(stateMergeData);
		}
	}, [location]);

	const moveToPage = (path = '/', newState = {}) => {
		navigate(path, {
			state: {
				...previousState,
				...newState,
			},
		});
	};

	const returnOnePage = () => {
		navigate(-1);
	};

	return {
		previousState,
		moveToPage,
		returnOnePage,
	};
};

export { usePage };
