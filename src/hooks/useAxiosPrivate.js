import { useEffect, useContext } from 'react';

import useRefreshToken from '@/hooks/useRefreshToken';
import {
	axiosPrivateImporter,
	axiosPrivateCustomer,
	axiosPrivateReporter,
} from '@/services/axios';
import AuthContext from '@/context/AuthProvider';
import { usePage } from '@/hooks/usePage';

const useAxiosPrivate = (endpoint = 'importer') => {
	const { setAuth } = useContext(AuthContext);
	const refresh = useRefreshToken();
	const { moveToPage } = usePage();
	const token = JSON.parse(localStorage.getItem('permissionsMergeData'))
		? JSON.parse(localStorage.getItem('permissionsMergeData')).token
		: null;

	const handleLogout = () => {
		localStorage.removeItem('permissionsMergeData');
		localStorage.removeItem('reportsMergeData');
		moveToPage('/login');
		setAuth('');
	};

	useEffect(() => {
		let requestIntercept;
		if (endpoint === 'importer') {
			requestIntercept = axiosPrivateImporter.interceptors.request.use(
				config => {
					if (!config.headers.Authorization) {
						config.headers.Authorization = `Bearer ${token}`;
					}
					return config;
				},
				error => Promise.reject(error),
			);
		}

		if (endpoint === 'customer') {
			requestIntercept = axiosPrivateCustomer.interceptors.request.use(
				config => {
					if (!config.headers.Authorization) {
						config.headers.Authorization = `Bearer ${token}`;
					}
					return config;
				},
				error => Promise.reject(error),
			);
		}
		if (endpoint === 'reporter') {
			requestIntercept = axiosPrivateReporter.interceptors.request.use(
				config => {
					if (!config.headers.Authorization) {
						config.headers.Authorization = `Bearer ${token}`;
					}
					return config;
				},
				error => Promise.reject(error),
			);
		}

		let responseIntercept;
		if (endpoint === 'importer') {
			responseIntercept = axiosPrivateImporter.interceptors.response.use(
				response => response,
				async error => {
					const prevRequest = error?.config;
					if (
						error.response.status === 401 ||
						(error.response.status === 403 && !prevRequest?.sent)
					) {
						handleLogout();
						// prevRequest.sent = true;
						// const { newToken } = await refresh();
						// prevRequest.headers.Authorization = `Bearer ${newToken}`;
						// return axiosPrivateImporter(prevRequest);
					}
					return Promise.reject(error);
				},
			);
		}

		if (endpoint === 'customer') {
			responseIntercept = axiosPrivateCustomer.interceptors.response.use(
				response => response,
				async error => {
					const prevRequest = error?.config;
					if (
						error.response.status === 401 ||
						(error.response.status === 403 && !prevRequest?.sent)
					) {
						handleLogout();
						// prevRequest.sent = true;
						// const { newToken } = await refresh();
						// prevRequest.headers.Authorization = `Bearer ${newToken}`;
						// return axiosPrivateCustomer(prevRequest);
					}
					return Promise.reject(error);
				},
			);
		}
		if (endpoint === 'reporter') {
			responseIntercept = axiosPrivateReporter.interceptors.response.use(
				response => response,
				async error => {
					const prevRequest = error?.config;
					if (
						error.response.status === 401 ||
						(error.response.status === 403 && !prevRequest?.sent)
					) {
						handleLogout();
						// prevRequest.sent = true;
						// const { newToken } = await refresh();
						// prevRequest.headers.Authorization = `Bearer ${newToken}`;
						// return axiosPrivateReporter(prevRequest);
					}
					return Promise.reject(error);
				},
			);
		}

		return () => {
			if (endpoint === 'importer') {
				axiosPrivateImporter.interceptors.request.eject(requestIntercept);
				axiosPrivateImporter.interceptors.response.eject(responseIntercept);
			}
			if (endpoint === 'customer') {
				axiosPrivateCustomer.interceptors.request.eject(requestIntercept);
				axiosPrivateCustomer.interceptors.response.eject(responseIntercept);
			}
			if (endpoint === 'reporter') {
				axiosPrivateReporter.interceptors.request.eject(requestIntercept);
				axiosPrivateReporter.interceptors.response.eject(responseIntercept);
			}
		};
	}, [token, refresh]);

	if (endpoint === 'importer') {
		return axiosPrivateImporter;
	}
	if (endpoint === 'customer') {
		return axiosPrivateCustomer;
	}
	if (endpoint === 'reporter') {
		return axiosPrivateReporter;
	}
};

export default useAxiosPrivate;
