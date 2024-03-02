import addIcon from '@/assets/svg/admin/add-icon.svg';
import { useState, useMemo } from 'react';
import checkIcon from '@/assets/svg/admin/check-icon.svg';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AdminClients = () => {
	const [isHovered, setIsHovered] = useState(false);
	// grid settings
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
	const reportColumns = [
		{ field: 'client Id' },
		{ field: 'client name' },
		{ field: 'number of stores' },
		{ field: 'date created' },
		{ field: 'primary contact' },
	];
	const reportRows = [
		{
			'client Id': 1,
			'client name': 'Jacob & Co',
			'number of stores': 100,
			'date created': '03/27/2023',
			'primary contact': 'Natalia Craig',
		},
		{
			'client Id': 2,
			'client name': 'Hendrick Automotive',
			'number of stores': 21,
			'date created': '03/27/2023',
			'primary contact': 'Natalia Craig',
		},
	];
	return (
		<div className='flex flex-col gap-4 h-full'>
			<div className='h-[50px] flex items-center justify-between'>
				<div className='font-baloo'>
					<h6 className='text-neutrals-00 leading-[26px] text-2xl'>Clients</h6>
					<p className='text-xs text-primary-purple-100 font-public'>
						Total: 112
					</p>
				</div>
				<button
					type='button'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className='h-12 px-4 py-3 flex items-center gap-1 justify-center bg-primary-purple-600 rounded-md font-baloo text-neutrals-00 hover:bg-primary-purple-800 transition-all duration-300 ease-in-out'
				>
					<p className='text-sm'>Add Client</p>
					{isHovered ? (
						<img src={checkIcon} alt='icon' />
					) : (
						<img src={addIcon} alt='icon' />
					)}
				</button>
			</div>
			<div className='w-full h-full text-neutrals-50 font-public ag-theme-alpine-dark'>
				<AgGridReact
					columnDefs={reportColumns}
					rowData={reportRows}
					animateRows
					defaultColDef={defaultColDef}
				/>
			</div>
		</div>
	);
};
export default AdminClients;
