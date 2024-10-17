import { createContext, useState } from 'react';

const ReportsContext = createContext({});

export const ReportsProvider = ({ children }) => {
	const [user, setUser] = useState({
		clientSelected: 1,
		storesSelected: [1],
		stores: [1],
		clients: [1],
		userId: 0,
		firstName: '',
		lastName: '',
		email: ''
	});
	const [section, setSection] = useState({ id: 0 });
	const [subSection, setSubSection] = useState({ clientId: 1, id: 0 });
	const [report, setReport] = useState({
		isYTD: true,
		byTrend: false,
		id: 0,
		clientId: 1,
		storeId: [1],
		period: null,
		sourceOfReport: '',
	});
	const [reportFormatted, setReportFormatted] = useState(null);

	const [sections, setSections] = useState([]);
	const [subSections, setSubSections] = useState([]);
	const [reports, setReports] = useState([]);

	const [target, setTarget] = useState([{ id: 1, name: 'Prior Month', label: 'Prior Month' }]);
	const [stores, setStores] = useState([]);
	const [storesSelected, setStoresSelected] = useState(null);
	const [selectedStoreGroups, setSelectedStoreGroups] = useState(null);

	return (
		<ReportsContext.Provider
			value={{
				user,
				setUser,
				section,
				setSection,
				subSection,
				setSubSection,
				report,
				setReport,
				reportFormatted,
				setReportFormatted,
				sections,
				setSections,
				subSections,
				setSubSections,
				reports,
				setReports,
				target,
				setTarget,
				stores,
				setStores,
				storesSelected,
				setStoresSelected,
				selectedStoreGroups,
				setSelectedStoreGroups,
			}}
		>
			{children}
		</ReportsContext.Provider>
	);
};

export default ReportsContext;
