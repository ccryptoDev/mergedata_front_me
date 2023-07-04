import { useState } from 'react';

import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const useReport = () => {
	const getSectionsPath = '/Report/GetSections';
	const getSubSectionsPath = '/Report/GetSubSections';
	const getReportListBySubSectionPath = '/Report/GetReportListBySubSection';
	const getReportSummaryPath = '/Report/GetReportSummary';
	const getReportPath = '/Report/GetReport';
	const [loading, setLoading] = useState(false);
	const axiosPrivateCustomer = useAxiosPrivate('customer');

	const getSections = async userId => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getSectionsPath, {
				params: {
					userId,
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

	const getSubSections = async (section = { id: 4, userId: 1 }) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(getSubSectionsPath, {
				params: {
					sectionId: section.id,
					userId: section.userId,
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

	const getReportListBySubSection = async (
		subSection = { clientId: 1, id: 4, userId: 1 },
	) => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(
				getReportListBySubSectionPath,
				{
					params: {
						subSectionId: subSection.id,
						clientId: subSection.clientId,
						userId: subSection.userId,
					},
				},
			);
			if (response.status === 200) {
				setLoading(false);
				return response.data.data;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const getReportSummary = async (
		reportInfo = {
			id: 1,
			clientId: 1,
		},
	) => {
		setLoading(true);
		const formData = new FormData();
		formData.append('ReportID', reportInfo.id);
		formData.append('ClientID', reportInfo.clientId);
		try {
			const response = await axiosPrivateCustomer.post(
				getReportSummaryPath,
				formData,
				{ headers: { 'Content-Type': 'multipart/form-data' } },
			);
			if (response.status === 200) {
				setLoading(false);
				return response.data.data;
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const getReport = async (
		reportInfo = {
			id: 1,
			clientId: 1,
			storeId: [1],
			period: ['2023-04'],
		},
	) => {
		setLoading(true);
		const formData = new FormData();
		formData.append('ReportID', reportInfo.id);
		formData.append('ClientID', reportInfo.clientId);
		formData.append('StoreID', reportInfo.storeId);
		formData.append('Period', reportInfo.period);
		try {
			const response = await axiosPrivateCustomer.post(
				getReportPath,
				formData,
				{ headers: { 'Content-Type': 'multipart/form-data' } },
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

	const getSummaries = async (
		subSection = { clientId: 1, id: 7, userId: 1 },
	) => {
		setLoading(true);
		try {
			const reportListsBySubSection = await getReportListBySubSection(
				subSection,
			);
			const reportListsBySubSectionWithExtraInfo = reportListsBySubSection.map(
				reportListsBySubSection => ({
					...reportListsBySubSection,
					userId: subSection.userId,
					clientId: subSection.clientId,
				}),
			);

			const reportSummary = [];
			for (let i = 0; i < reportListsBySubSectionWithExtraInfo.length; i++) {
				reportSummary.push(
					getReportSummary({
						id: reportListsBySubSectionWithExtraInfo[i].id,
						clientId: reportListsBySubSectionWithExtraInfo[i].clientId,
						userId: reportListsBySubSectionWithExtraInfo[i].userId,
					}),
				);
			}
			const response = Promise.all(reportSummary);
			setLoading(false);
			return response;
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const getSummariesForAllSubSections = async (
		subSections = [{ clientId: 1, id: 7, userId: 1 }],
	) => {
		setLoading(true);
		try {
			const reportSummary = [];
			for (let i = 0; i < subSections.length; i++) {
				reportSummary.push(
					getSummaries({
						id: subSections[i].id,
						clientId: subSections[i].clientId,
						userId: subSections[i].userId,
					}),
				);
			}
			const response = Promise.all(reportSummary);
			setLoading(false);
			return response;
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	const getSummariesForASection = async (
		section = { id: 1, userId: 1, clientId: 1 },
	) => {
		setLoading(true);
		try {
			const subSections = await getSubSections(section);
			const subSectionsWithExtraInfo = subSections.map(subSection => ({
				...subSection,
				userId: section.userId,
				clientId: section.clientId,
			}));
			const summaries = await getSummariesForAllSubSections(
				subSectionsWithExtraInfo,
			);
			setLoading(false);
			return summaries;
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		return null;
	};

	return {
		loading,
		getSections,
		getSubSections,
		getReportListBySubSection,
		getReportSummary,
		getSummaries,
		getSummariesForAllSubSections,
		getSummariesForASection,
		getReport,
	};
};

export { useReport };
