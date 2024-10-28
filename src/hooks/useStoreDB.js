import { useState } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const useStoreDB = () => {
	const getStoresPath = '/Store/GetStores';
	const getStoreGroupsPath = '/Store/GetStoreGroups';
	const createStoreGroupPath = '/Store/CreateStoreGroup';
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');

	const getStores = async clientId => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getStoresPath, {
				params: {
					clientId,
				},
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

	const getStoreGroups = async clientId => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(`${getStoreGroupsPath}/${clientId}`, {
				params: {
					clientId,
				},
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

	const createStoreGroup = async (
		storeGroup = {
			storeGroupLevel: 1, // Admin could decide if Client 1 otherwise always User 2
			clientId: 1,
			name: 'StoreGroup Frontend',
			storeIds: [1],
		},
	) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.post(
				createStoreGroupPath,
				storeGroup,
			);
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
		getStores,
		getStoreGroups,
		createStoreGroup,
	};
};

export { useStoreDB };
