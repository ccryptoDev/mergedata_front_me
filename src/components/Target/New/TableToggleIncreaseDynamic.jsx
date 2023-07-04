import { useState } from 'react';
import Table7 from '@/components/Target/New/Table7';
import Table7Total from '@/components/Target/New/Table7Total';
import GenericTable from '@/components/General/GenericTable/GenericTable';
import FilterIcon from '@/components/General/Icons/FilterIcon';
import { GenericTableHeaders } from '@/components/General/GenericTableHeaders/GenericTableHeaders';

export default function TableToggleIncreaseDynamic({ report }) {
	const [reduce, setReduce] = useState(false);
	const [MTDtoggle, setMTDtoggle] = useState(false);
	const [filterToggle, setFilterToggle] = useState(false);
	const [onSwitch, setOnSwitch] = useState(false);

	const handleClick = () => {
		setOnSwitch(!onSwitch);
	};

	const LeftHeaders = [
		{
			type: 'filter',
			placeholder: 'MTD',
			onAction: () => setFilterToggle(!filterToggle),
			action: filterToggle,
			icon: <FilterIcon />,

			items: [
				{
					name: 'Days in Inventory (More to Less)',
					value: 'Days in Inventory (More to Less)',
				},
				{
					name: 'Make Model (A-Z)',
					value: 'Make Model (A-Z)',
				},
				{
					name: 'VDP Views (More to Less)',
					value: 'VDP Views (More to Less)',
				},
				{
					name: 'List Price (More to Less)',
					value: 'List Price (More to Less)',
				},
			],
		},
		{
			type: 'select',
			placeholder: 'MTD',
			onAction: () => setMTDtoggle(!MTDtoggle),
			action: MTDtoggle,
			items: [
				{
					name: 'MTD',
					value: 'MTD',
				},
				{
					name: 'YTD',
					value: 'YTD',
				},
			],
		},
		{
			type: 'slide',
			placeholder: 'By Trend',
			onAction: () => handleClick(),
			action: onSwitch,
		},
		{
			type: 'slide',
			placeholder: 'By Store',
			onAction: () => console.log('clicked'),
			action: '',
		},
	];

	return (
		<div className='h=4 w-30'>
			<div
				className={`relative bg-[#212A43] px-6 pt-6 flex flex-col h-[666px] rounded-2xl ${
					!reduce ? 'w-full' : 'w-[555px]'
				}`}
			>
				<GenericTableHeaders
					report={report}
					headers={LeftHeaders}
					withShare
					withDownload
					withSplit
					onSplit={() => setReduce(!reduce)}
					split={reduce}
				/>
				<div className='transition-opacity delay-[4000ms]'>
					{!onSwitch ? (
						<div>
							<div className='overflow-scroll max-h-[550px]'>
								<GenericTable
									columns={report?.columns}
									rows={report?.rows}
									types={report?.types}
									withTotal={true}
								/>
							</div>
						</div>
					) : (
						<div>
							<div className='overflow-hidden'>
								<Table7 />
							</div>
							<div className='absolute top-[606px] left-0 w-full rounded-[50px]'>
								<Table7Total shouldReduce={reduce} report={report} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
