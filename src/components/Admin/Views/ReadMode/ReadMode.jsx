import { useEffect, useMemo, useState } from 'react';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useStore } from '@/store/store';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Loader from '@/components/General/Loader';

const ReadMode = () => {
	const [loading, setLoading] = useState(false);
	const [columnDefs, setColumnDefs] = useState([]);
	const [rowData, setRowData] = useState([]);

	const adminSection = useStore(state => state.adminSection);

	const url = () => {
		switch (adminSection) {
			case 'Clients':
				return '';
			case 'Stores':
				return 'Store/GetStores?clientId=2&agGridFormat=true';
			default:
				break;
		}
	};

	const defaultColDef = useMemo(() => ({
		flex: 1,
		sortable: true,
		filter: true,
		resizable: true,
		wrapHeaderText: 'true',
		autoHeaderHeight: 'true',
		filterParams: {
			buttons: ['reset'],
		},
	}));

	const axiosPrivateCustomer = useAxiosPrivate('customer');

	const getStores = async () => {
		setLoading(true);
		try {
			const response = await axiosPrivateCustomer.get(url());
			if (response.status === 200) {
				setLoading(false);
				console.log(response.data);
				setColumnDefs(response.data.columns);
				setRowData(response.data.reportLines);
			}
		} catch (error) {
			console.log(error);
			setColumnDefs([]);
			setRowData([]);
			setLoading(false);
		}
		setLoading(false);
		return null;
	};

	useEffect(() => {
		getStores();
	}, [adminSection]);
	return (
		<div className='w-full h-full text-neutrals-50 font-public ag-theme-alpine-dark'>
			{loading ? (
				<div className='w-full h-full flex items-center justify-center'>
					<Loader />
				</div>
			) : (
				<AgGridReact
					columnDefs={columnDefs}
					rowData={rowData}
					animateRows
					defaultColDef={defaultColDef}
				/>
			)}
		</div>
	);
};
export default ReadMode;
