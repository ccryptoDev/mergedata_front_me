import { useState, useEffect } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useStore } from '@/store/store';

const useSections = (currentSection = '') => {
	const user = useStore(state => state.user);
	const section = useStore(state => state.section);
	const setSection = useStore(state => state.setSection);
	const setSections = useStore(state => state.setSections);
	const [loading, setLoading] = useState(false);
	const [localSection, setLocalSection] = useState({ id: 0 });
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getSectionsPath = '/Report/GetSections';

	const getSections = async userId => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getSectionsPath, {
				params: {
					userId,
				},
			});
			if (response.status === 200) {
				setLoading(false);
				const result = response.data.sort((a, b) => a.order - b.order);
				setSections(result);
				if (!section.id) {
					let sectionTmp = result[0];
					if (currentSection) {
						sectionTmp = result.find(
							section => section.name === currentSection,
						);
					}
					setSection(sectionTmp);
					setLocalSection(sectionTmp);
				} else {
					setLocalSection(section);
				}
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		user.userId && getSections(user.userId);
	}, [user]);

	return {
		loading,
		localSection,
	};
};

export { useSections };
