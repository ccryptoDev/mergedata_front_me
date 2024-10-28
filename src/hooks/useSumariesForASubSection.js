import { useState, useEffect, useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { formatReportsSummaries } from '@/utils/helperFunctions';
import { useStore } from '@/store/store';

const useSumariesForASubSection = () => {
	const { target } = useContext(ReportsContext);
	const user = useStore(state => state.user);
	const subSection = useStore(state => state.subSection);
	const storesSelected = useStore(state => state.storesSelected);
	const period = useStore(state => state.period);
	const [loading, setLoading] = useState(false);
	const [summaries, setSummaries] = useState([]);
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getReportListBySubSectionPath = '/Report/GetReportListBySubSection';
	const getReportUpdatedPath = '/Report/GetUpdatedReportSummary';

	const getReportSummaries = async (subSectionId = 0) => {
		setLoading(true);
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
					subSectionId,
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
				setLoading(false);
				return response.data.data;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const getReportUpdated = async (
		info = { reportId: 0, selectedOptions: [1, 1] },
	) => {
		setLoading(true);
		let formattedPeriod = period;
		if (period?.length > 1 && period[0] === period[1]) {
			formattedPeriod = [period[0]];
		} else if (period?.length > 1 && period[0] !== period[1]) {
			formattedPeriod = [period[0], period[1]];
		} else {
			formattedPeriod = [period[0]];
		}
		try {
			const response = await axiosPrivateCustomer.post(getReportUpdatedPath, {
				...info,
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
			});
			if (response.status === 200) {
				setLoading(false);
				return formatReportsSummaries(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const obtainSummariesReports = async subSectionId => {
		const reportsSummaries = await getReportSummaries(subSectionId);
		const formattedReportsSummaries = reportsSummaries.map(reportSummary =>
			formatReportsSummaries(reportSummary),
		);
		setSummaries(formattedReportsSummaries);
	};

	useEffect(() => {
		subSection?.id && period && obtainSummariesReports(subSection.id);
	}, [subSection, period, storesSelected]);

	return {
		loading,
		summaries,
		getReportUpdated,
	};
};

export { useSumariesForASubSection };
