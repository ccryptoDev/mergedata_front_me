import axios from 'axios';

const BASE_URL_IMPORTER = `${import.meta.env.VITE_URL_BACKEND_IMPORTER}`;
const BASE_URL_CUSTOMER = `${import.meta.env.VITE_URL_BACKEND_CUSTOMER}`;
const BASE_URL_REPORTER = `${import.meta.env.VITE_URL_BACKEND_REPORTER}`;

export const axiosImporter = axios.create({
	baseURL: BASE_URL_IMPORTER,
});

export const axiosCustomer = axios.create({
	baseURL: BASE_URL_CUSTOMER,
});

export const axiosReporter = axios.create({
	baseURL: BASE_URL_REPORTER,
});

export const axiosPrivateImporter = axios.create({
	baseURL: BASE_URL_IMPORTER,
	withCredentials: true,
});

export const axiosPrivateCustomer = axios.create({
	baseURL: BASE_URL_CUSTOMER,
	withCredentials: true,
});

export const axiosPrivateReporter = axios.create({
	baseURL: BASE_URL_REPORTER,
	withCredentials: true,
});
