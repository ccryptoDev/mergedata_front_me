import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { useStore } from '@/store/store';
import { useSections } from '@/hooks/useSections';
import ReportsContext from '@/context/ReportsProvider';

const useTargetsPHP = (currentSection = '') => {
	const { localSection } = useSections(currentSection);
	const storesSelected = useStore(state => state.storesSelected);
	const clientId = useStore(state => state.clientId);
	const period = useStore(state => state.period);
	const [loading, setLoading] = useState(false);
	const [localSubSections, setLocalSubSections] = useState([]);
	const { target } = useContext(ReportsContext);
	const getTargetPath =
		'https://mdadapter.mergedata.io/php/targets/readTargetsMain2.php';

	const getTargets = async () => {
		setLoading(true);
		let auxReportData = {
			clientId,
			comp: target[0].id,
			storeId: storesSelected,
			period: [period[0]],
		};
		if (period?.length > 1 && period[0] !== period[1]) {
			auxReportData = {
				...auxReportData,
				period: [period[0], period[1]],
			};
		}
		const formData = new FormData();
		formData.append('periodId', auxReportData.period);
		formData.append('clientId', auxReportData.clientId);
		formData.append('comp', auxReportData.comp);
		formData.append('storeId[]', auxReportData.storeId);
		try {
			const response = await axios.post(getTargetPath, formData);
			if (response.status === 200) {
				const targets = response.data.data;
				setLocalSubSections(targets);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		localSection.id && currentSection === localSection.name && getTargets();
	}, [storesSelected, period, localSection, target]);

	return {
		loading,
		localSubSections,
	};
};

export { useTargetsPHP };
