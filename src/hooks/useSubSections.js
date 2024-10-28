import { useState, useEffect } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useStore } from '@/store/store';
import { useSections } from '@/hooks/useSections';

const useSubSections = (currentSection = '') => {
	const { localSection } = useSections(currentSection);
	const user = useStore(state => state.user);
	const setSubSections = useStore(state => state.setSubSections);
	const [loading, setLoading] = useState(false);
	const [localSubSections, setLocalSubSections] = useState([]);
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getSubSectionsPath = '/Report/GetSubSections';

	const getSubSections = async (section = { id: 4, userId: 1 }) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getSubSectionsPath, {
				params: {
					sectionId: section.id,
					userId: section.userId,
				},
			});
			if (response.status === 200) {
				const subSections = response.data.sort((a, b) => a.order - b.order);
				setSubSections(subSections);
				setLocalSubSections(subSections);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		localSection.id &&
			currentSection === localSection.name &&
			getSubSections({ userId: user.userId, id: localSection.id });
	}, [localSection]);

	return {
		loading,
		localSubSections,
	};
};

export { useSubSections };
