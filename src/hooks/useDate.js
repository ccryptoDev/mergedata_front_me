import { useState } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const useDate = () => {
	const getDatesPath = '/General/GetSystemDate';
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');

	const getDates = async clientId => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getDatesPath, {
				params: {
					clientId,
				},
			});
			if (response.status === 200) {
				setLoading(false);
				localStorage.setItem(
					'MergeDataSystemDate',
					response.data.data.lastUpdateDate,
				);
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
		getDates,
	};
};

export { useDate };
