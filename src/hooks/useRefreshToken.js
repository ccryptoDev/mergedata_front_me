import { axiosImporter } from '@/services/axios';

const useRefreshToken = () => {
	const highroad = JSON.parse(localStorage.getItem('highroad'));
	const token = highroad?.token;
	const refreshToken = highroad?.refreshToken;
	const email = highroad?.email;
	const refreshAPI = '/identity/Token/RefreshToken';

	const refresh = async () => {
		const response = await axiosImporter.post(
			refreshAPI,
			{
				token,
				refreshToken,
			},
			{ withCredentials: true },
		);
		const data = response?.data?.data;
		const newToken = data?.token;
		const newRefreshToken = data?.refreshToken;
		const stor = {
			...highroad,
			token: newToken,
			refreshToken: newRefreshToken,
		};

		localStorage.setItem('highroad', JSON.stringify({ ...stor, email }));

		return { newToken, newRefreshToken };
	};
	return refresh;
};

export default useRefreshToken;
