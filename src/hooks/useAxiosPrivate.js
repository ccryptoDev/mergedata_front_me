import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useRefreshToken from '@/hooks/useRefreshToken';
import { axiosPrivateImporter } from '@/services/axios';
import AuthContext from '@context/AuthProvider';

const useAxiosPrivate = () => {
	const { setAuth } = useContext(AuthContext);
	const refresh = useRefreshToken();
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem('permissionsMergeData'))
		? JSON.parse(localStorage.getItem('permissionsMergeData')).token
		: null;

	const handleLogout = () => {
		navigate('/login');
		setAuth('');
		localStorage.removeItem('permissionsMergeData');
	};

	useEffect(() => {
		const requestIntercept = axiosPrivateImporter.interceptors.request.use(
			config => {
				if (!config.headers.Authorization) {
					config.headers.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			error => Promise.reject(error),
		);

		const responseIntercept = axiosPrivateImporter.interceptors.response.use(
			response => response,
			async error => {
				const prevRequest = error?.config;
				if (
					error.response.status === 401 ||
					(error.response.status === 403 && !prevRequest?.sent)
				) {
					handleLogout();
					prevRequest.sent = true;
					const { newToken } = await refresh();
					prevRequest.headers.Authorization = `Bearer ${newToken}`;
					return axiosPrivateImporter(prevRequest);
				}
				return Promise.reject(error);
			},
		);

		return () => {
			axiosPrivateImporter.interceptors.request.eject(requestIntercept);
			axiosPrivateImporter.interceptors.response.eject(responseIntercept);
		};
	}, [token, refresh]);

	return axiosPrivateImporter;
};

export default useAxiosPrivate;
