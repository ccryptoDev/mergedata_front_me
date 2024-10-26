import { useState, useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const useDrillDown = () => {
	const { report } = useContext(ReportsContext);
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');
	const getDrillDownPath = '/Report/GetLineDrilldown';

	const getDrillDown = async (
		info = {
			level: 1,
			reportLineId: 1,
			accountNo: '111',
		},
	) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.post(getDrillDownPath, {
				...info,
				storeId: report.storeId,
				period: report.period,
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

	return {
		loading,
		getDrillDown,
	};
};

export { useDrillDown };
