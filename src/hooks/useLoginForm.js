import { useContext, useState } from 'react';

import AuthContext from '@/context/AuthProvider';
import { axiosCustomer } from '@/services/axios';
import { usePage } from '@/hooks/usePage';

const useLoginForm = (
	initialForm = {
		name: '',
		pwd: '',
	},
) => {
	const loginPath = '/identity/Token/Login';
	const forgotPasswordPath = '/identity/User/ForgotPassword';
	const getTokenPath = '/identity/User/ValidateResetCode';
	const resetPasswordPath = '/identity/User/ResetPassword';
	const { setAuth } = useContext(AuthContext);
	const [form, setForm] = useState(initialForm);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { moveToPage } = usePage();

	const handleLogout = () => {
		moveToPage('/login');
		setAuth('');
		localStorage.removeItem('permissionsMergeData');
	};

	const handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const cleanMessage = () => {
		setTimeout(() => {
			setErrorMessage('');
		}, 5000);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const email = form.name;
		const password = form.pwd;
		const passwordRequirements =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
		if (!password.match(passwordRequirements)) {
			cleanMessage(setErrorMessage('Incorrect User and/or Password'));
			return null;
		}
		setLoading(true);
		try {
			const response = await axiosCustomer.post(
				loginPath,
				{
					email,
					password,
				},
				{ withCredentials: true },
			);
			const data = response?.data?.data;
			const token = data?.token;
			const refreshToken = data?.refreshToken;
			const userId = data?.userId;
			const firstName = data?.firstName;
			const lastName = data?.lastName;
			const clients = data?.clients?.length ? data.clients : [1];
			const stores = data?.stores?.length ? data.stores : [1];
			const role = data?.userRoles[0];
			const permissionsMergeData = {
				userId,
				role,
				token,
				refreshToken,
				firstName,
				lastName,
				clients,
				stores,
				client: clients[0],
				store: stores[0],
			};
			localStorage.setItem(
				'permissionsMergeData',
				JSON.stringify({ ...permissionsMergeData }),
			);
			setAuth({ userId, role, token, refreshToken });
			setLoading(false);
			moveToPage('/', {
				user: {
					userId,
					role,
					token,
					refreshToken,
					firstName,
					lastName,
					clients,
					stores,
					client: clients[0],
					store: stores[0],
				},
			});
		} catch (error) {
			setLoading(false);
			if (!error?.response) {
				cleanMessage(setErrorMessage('no server response'));
				setForm(initialForm);
			} else if (error.response?.status === 400) {
				cleanMessage(setErrorMessage('missing username or password'));
				setForm(initialForm);
			} else if (error.response?.status === 401) {
				cleanMessage(setErrorMessage('Incorrect User and/or Password'));
				setForm(initialForm);
			} else {
				cleanMessage(setErrorMessage('Login failed'));
				setForm(initialForm);
			}
		}
	};

	const forgotPassword = async email => {
		setLoading(true);
		try {
			const response = await axiosCustomer.post(forgotPasswordPath, {
				email,
				urlFrom: `${import.meta.env.VITE_URL_FRONTEND}recover-change-password`,
			});
			if (response.data.succeeded) {
				setLoading(false);
				return true;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return false;
	};

	const handleSentEmail = async (event, email) => {
		event.preventDefault();
		const result = await forgotPassword(email);
		if (result) {
			moveToPage('/recover-link', {
				state: email,
			});
		}
		cleanMessage(setErrorMessage('Unable to sent the mail to that email'));
	};

	const getToken = async code => {
		try {
			const response = await axiosCustomer.post(getTokenPath, {
				code,
			});
			if (response.data.succeeded) return response.data.data;
		} catch (error) {
			console.log(error);
		}
		cleanMessage(setErrorMessage('Code Invalid'));
	};

	const updatePassword = async config => {
		if (config.password !== config.confirmPassword) {
			cleanMessage(setErrorMessage('Passwords do not match'));
			return null;
		}
		const passwordRequirements =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
		if (!config.password.match(passwordRequirements)) {
			cleanMessage(
				setErrorMessage(
					'Passwords must have at least 8 characters with minimum 1 uppercase, 1 lowercase, 1 number, and 1 special character',
				),
			);
			return null;
		}
		setLoading(true);
		let response;
		try {
			response = await axiosCustomer.post(resetPasswordPath, config);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		if (response?.data?.succeeded) moveToPage('/recover-password-updated');
		cleanMessage(setErrorMessage('Unable to change the password'));
	};

	return {
		form,
		handleChange,
		handleSubmit,
		loading,
		errorMessage,
		handleLogout,
		handleSentEmail,
		getToken,
		updatePassword,
	};
};

export { useLoginForm };
