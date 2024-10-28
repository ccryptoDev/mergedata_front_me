import { useState, useEffect, useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useSubSections } from '@/hooks/useSubSections';
import { formatReportsSummaries } from '@/utils/helperFunctions';
import { useStore } from '@/store/store';

const useSumariesForASection = (currentSection = '') => {
	const { localSubSections } = useSubSections(currentSection);
	const { target } = useContext(ReportsContext);
	const section = useStore(state => state.section);
	const storesSelected = useStore(state => state.storesSelected);
	const user = useStore(state => state.user);
	const period = useStore(state => state.period);
	const [loading, setLoading] = useState(false);
	const [summaries, setSummaries] = useState(null);
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getReportListBySubSectionPath = '/Report/GetReportListBySubSection';

	const getReportListBySubSection = async (subSection = { id: 0 }) => {
		// setLoading(true);
		let formattedPeriod = period;
		if (period?.length > 1 && period[0] === period[1]) {
			formattedPeriod = [period[0]];
		} else if (period?.length > 1 && period[0] !== period[1]) {
			formattedPeriod = [period[0], period[1]];
		} else {
			formattedPeriod = [period[0]];
		}
		try {
			const response = await axiosPrivateCustomer.post(
				getReportListBySubSectionPath,
				{
					subSectionId: subSection.id,
					userId: user.userId,
					clientId: user.clients[0].clientId,
					target: target[0].id,
					storeId: storesSelected,
					period:
						typeof formattedPeriod[0] !== 'string'
							? formattedPeriod[0]
							: typeof formattedPeriod === 'string'
							? [formattedPeriod]
							: formattedPeriod,
				},
			);
			if (response.status === 200) {
				// setLoading(false);
				return response.data.data.map(reportSummary =>
					formatReportsSummaries(reportSummary),
				);
			}
		} catch (error) {
			console.log(error);
		}
		// setLoading(false);
		return null;
	};

	const getSummariesForAllSubSections = async () => {
		setLoading(true);
		try {
			const reportSummary = [];
			for (let i = 0; i < localSubSections.length; i++) {
				reportSummary.push(
					getReportListBySubSection({
						id: localSubSections[i].id,
					}),
				);
			}
			const response = await Promise.all(reportSummary);
			setLoading(false);
			setSummaries(response[0]);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	useEffect(() => {
		localSubSections.length &&
			currentSection === section.name &&
			getSummariesForAllSubSections();
	}, [localSubSections, period, storesSelected]);

	return {
		loading,
		summaries,
	};
};

export { useSumariesForASection };
