import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStore } from '@/store/store';
import ReportsContext from '@/context/ReportsProvider';

const usePage = () => {
	const { setReport } = useContext(ReportsContext);
	const setSection = useStore(state => state.setSection);
	const setSubSection = useStore(state => state.setSubSection);
	const setUser = useStore(state => state.setUser);
	const navigate = useNavigate();

	const moveToPage = (path = '/', newState = {}) => {
		const newStateKeys = Object.keys(newState);
		if (newStateKeys[0] === 'reportInfo') setReport(newState.reportInfo);
		if (newStateKeys[0] === 'user') setUser(newState.user);
		if (newStateKeys[0] === 'section') setSection(newState.section);
		if (newStateKeys[0] === 'subSection') setSubSection(newState.subSection);
		navigate(path, {
			state: {
				...newState,
			},
		});
	};

	const returnOnePage = () => {
		navigate(-1);
	};

	return {
		moveToPage,
		returnOnePage,
	};
};

export { usePage };
