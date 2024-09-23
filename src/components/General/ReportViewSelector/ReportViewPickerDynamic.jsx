import { useState, useEffect } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import { useStore } from '@/store/store';
import useClickOutside from '@/hooks/useClickOutside';
import { ProcessorIcon } from '@/components/General/Icons/ProcessorIcon';

const salesOptionView = [
	{ name: 'Overview', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Sales', value: 'sales' },
	{ name: 'Gross', value: 'gross' },
	{ name: 'Front End', value: 'front' },
	{ name: 'Back End', value: 'back' },
];
const serviceOptionView = [
	{ name: 'Overview', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Sales', value: 'sales' },
	{ name: 'Gross', value: 'gross' },
];
const technicianOptionView = [
	{ name: 'Overview', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Labor', value: 'labor' },
	{ name: 'Hours', value: 'hours' },
	{ name: 'ELR', value: 'ELR' },
];

const ReportViewPickerDynamic = () => {
	const [toggle, setToggle] = useState(false);
	const [options, setOptions] = useState(salesOptionView);

	const states = useStore(state => state.states);
	const setStates = useStore(state => state.setStates);
	const reportId = useStore(state => state.reportId);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);

	const ref = useClickOutside(() => {
		setToggle(false);
	});

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleSelectionClick = (name, value) => {
		const states = { name, value };
		setStates(states);
		setToggle(false);
		setToggleDrillMode(false);
	};

	useEffect(() => {
		setOptions(
			reportId === 80
				? serviceOptionView
				: reportId === 81
				? technicianOptionView
				: salesOptionView,
		);
	}, [reportId]);

	return (
		<div className='relative ' ref={ref}>
			<button
				type='button'
				onClick={handleToggle}
				className={`w-52 h-12 px-4 flex justify-between items-center border-2 border-neutrals-900 bg-dark-accent-dark rounded-xl font-baloo text-sm text-gray-50 hover:border-primary-purple-600 hover:bg-dark-accent-00 transition-colors ${
					toggle
						? 'bg-dark-accent-00 border-primary-purple-600'
						: 'bg-dark-accent-dark border-neutrals-900 '
				}`}
			>
				<div className='flex items-center gap-2'>
					<ProcessorIcon />
					<p>{states.name}</p>
				</div>
				<ArrowDownIcon className={`duration-300 ${toggle && 'rotate-180'}`} />
			</button>
			{toggle && (
				<div className='absolute z-30 top-16 right-0 max-h-80 flex flex-col p-3 w-72 bg-dark-accent-dark rounded-xl overflow-hidden'>
					<div className='pr-4 max-h-80 overflow-auto'>
						{options.map(option => (
							<button
								key={option.value}
								type='button'
								onClick={() => handleSelectionClick(option.name, option.value)}
								className='py-2 px-3 w-full h-11 font-baloo text-left rounded hover:bg-purple-600 hover:text-gray-50 transition-colors'
							>
								<p className='text-sm'>{option.name}</p>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ReportViewPickerDynamic;
