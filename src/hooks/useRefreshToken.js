import { axiosImporter } from '@/services/axios';

const useRefreshToken = () => {
	const permissionsMergeData = JSON.parse(
		localStorage.getItem('permissionsMergeData'),
	);
	const token = permissionsMergeData?.token;
	const refreshToken = permissionsMergeData?.refreshToken;
	const email = permissionsMergeData?.email;
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
			...permissionsMergeData,
			token: newToken,
			refreshToken: newRefreshToken,
		};

		localStorage.setItem(
			'permissionsMergeData',
			JSON.stringify({ ...stor, email }),
		);

		return { newToken, newRefreshToken };
	};
	return refresh;
};

export default useRefreshToken;
