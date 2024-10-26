import { useState, useEffect, useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import {
	formatReportsTable,
	periodDate,
	typePeriod,
} from '@/utils/helperFunctions';
import { useStore } from '@/store/store';

const useReportData = () => {
	const { report, target, reportFormatted, setReportFormatted } =
		useContext(ReportsContext);
	const section = useStore(state => state.section);
	const stores = useStore(state => state.stores);
	const storesSelected = useStore(state => state.storesSelected);
	const clientId = useStore(state => state.clientId);
	const period = useStore(state => state.period);
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getReportPath = '/Report/GetReport';

	const getReport = async (
		reportInfo = {
			id: 1,
			clientId: 1,
			storeId: [1],
			period: null,
		},
	) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.post(getReportPath, {
				...reportInfo,
				reportId: reportInfo.id,
				target: target[0].id,
				period:
					typeof reportInfo.period[0] !== 'string'
						? reportInfo.period[0]
						: typeof reportInfo.period === 'string'
						? [reportInfo.period]
						: reportInfo.period,
			});
			if (response.status === 200) {
				setLoading(false);
				return response.data;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const obtainReport = async reportInfo => {
		let auxReportData = {
			...reportInfo,
			clientId,
			storeId: storesSelected,
			period: [reportInfo?.period[0]],
		};
		if (
			reportInfo?.period?.length > 1 &&
			reportInfo?.period[0] !== reportInfo?.period[1]
		) {
			auxReportData = {
				...auxReportData,
				period: [reportInfo?.period[0], reportInfo?.period[1]],
			};
		}
		const reportData = await getReport(auxReportData);

		setReportFormatted({
			...reportFormatted,
			...formatReport(reportData, true),
		});
	};

	const formatReport = (reportData, addLine = true) => {
		const sectionName = section?.name || 'Community';
		const reportName = report?.name || 'Misc/DOC';
		const timelapse = report?.isYTD ? 'YTD' : 'MTD';
		const storesNames = [];
		for (let i = 0; i < stores.length; i++) {
			if (storesSelected?.includes(stores[i].storeId)) {
				storesNames.push(stores[i].name);
			}
		}
		const storesName = !storesSelected?.length
			? 'N/A'
			: stores.length === storesSelected?.length
			? 'All Stores'
			: storesNames?.toString().length <= 40
			? storesNames?.toString()
			: 'Multiple';
		const periodName = periodDate(
			typeof period[0] !== 'string'
				? period[0]
				: typeof period === 'string'
				? [period]
				: period,
			typePeriod(
				typeof period[0] !== 'string'
					? period[0][0]
					: typeof period === 'string'
					? period
					: period[0],
			),
		);
		return {
			...formatReportsTable(reportData, addLine),
			name: `${sectionName.replace(/\s/g, '_')}-${reportName.replace(
				/\s/g,
				'_',
			)}_${storesName}_${periodName.replace(/\s/g, '_')}`,
			reportName,
			timelapse,
			storesName,
			periodName,
			target: target?.length ? target[0].name : 'N/A',
		};
	};

	useEffect(() => {
		report?.id && period && obtainReport({ ...report, period });
	}, [report, period, target, storesSelected]);

	return {
		loading,
		formatReport,
		reportFormatted,
	};
};

export { useReportData };
