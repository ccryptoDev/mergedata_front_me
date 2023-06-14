import { useState } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const useReport = () => {
	const getReportPath = '/Report/GetReport';
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');

	const getReports = async (
		reportInfo = { reportId: 1, clientId: 1, storeId: 1, period: '2023-04' },
	) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.post(getReportPath, 0, {
				params: {
					reportId: reportInfo.reportId,
					clientId: reportInfo.clientId,
					storeId: reportInfo.storeId,
					period: reportInfo.period,
				},
			});
			if (response.data.succeeded) {
				setLoading(false);
				return response.data.data;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	return {
		loading,
		getReports,
	};
};

export { useReport };
