import { useEffect, useState } from 'react';

import { useReport } from '@/hooks/useReport';
import { usePage } from '@/hooks/usePage';
import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import TableToggleIncreaseDynamic from '@/components/Target/New/TableToggleIncreaseDynamic';
import { formatReportsTable } from '@/utils/helperFunctions';

function CommunityReportsTable () {
	const [report, setReport] = useState(null);
	const { getReport } = useReport('reporter');
	const { previousState, returnOnePage } = usePage();

	const formatReport = async reportInfo => {
		const report = await getReport(reportInfo);
		setReport({
			...formatReportsTable(report),
			name: `${previousState?.section?.name || 'Reports'}-${previousState?.reportInfo?.name || 'Misc/DOC'}_${previousState?.user?.store || 'All Stores'}-${previousState?.reportInfo?.period?.toString() || "['2023-05']"}`,
		});
	};

	const itemsTarget = [
		{
			id: 'dd-item-0',
			name: 'Prior Month',
			click: () => console.log('clicked 1'),
			selected: false,
		},
		{
			id: 'dd-item-1',
			name: 'Same Month Last Year',
			click: () => console.log('clicked 2'),
			selected: false,
		},
		{
			id: 'dd-item-2',
			name: '3 Months Average',
			click: () => console.log('clicked 3'),
			selected: false,
		},
		{
			id: 'dd-item-3',
			name: 'Add Target Preset',
			click: () => console.log('clicked 3'),
			selected: true,
		},
	];
	const itemsStores = [
		{
			id: 'dd-item-0',
			name: 'All Stores',
			click: () => console.log('clicked 1'),
			selected: false,
		},
		{
			id: 'dd-item-1',
			name: 'MD Sub-Toy',
			click: () => console.log('clicked 1'),
			selected: false,
		},
		{
			id: 'dd-item-2',
			name: 'MergeData Subaru',
			click: () => console.log('clicked 2'),
			selected: false,
		},
		{
			id: 'dd-item-3',
			name: 'MergeData Toyota',
			click: () => console.log('clicked 3'),
			selected: true,
		},
	];

	useEffect(() => {
		if (previousState?.reportInfo) formatReport(previousState.reportInfo);
	}, [previousState]);

	return (
		<SharedLayout>
			<div className='flex justify-between items-center'>
				<LeftArrowDirectActionHeart
					bgColor='bg-dark-popup-00'
					buttonName={previousState?.reportInfo?.name || 'MIS/Doc'}
					upperName={previousState?.section?.name || 'Community'}
					onClick={returnOnePage}
				/>
				<div className='flex items-center gap-12 uppercase'>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Day
					</h6>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Month
					</h6>
					<FilterDates />
				</div>
				<div className='flex gap-2'>
					<Dropdown items={itemsStores} name='Stores' />
					<Dropdown items={itemsTarget} />
				</div>
			</div>
			<TableToggleIncreaseDynamic report={report} />
		</SharedLayout>
	);
}

export default CommunityReportsTable;
