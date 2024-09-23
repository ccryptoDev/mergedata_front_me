import { useState, useEffect } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import { useStore } from '@/store/store';
import useClickOutside from '@/hooks/useClickOutside';
import { ProcessorIcon } from '@/components/General/Icons/ProcessorIcon';

const salesOptionView = [
	{ name: 'Default', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Sales', value: 'sales' },
	{ name: 'Gross', value: 'gross' },
	{ name: 'Front End', value: 'front' },
	{ name: 'Back End', value: 'back' },
];
const serviceOptionView = [
	{ name: 'Default', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Sales', value: 'sales' },
	{ name: 'Gross', value: 'gross' },
];
const technicianOptionView = [
	{ name: 'Default', value: 'default' },
	{ name: 'Units', value: 'units' },
	{ name: 'Labor', value: 'labor' },
	{ name: 'Hours', value: 'hours' },
	{ name: 'ELR', value: 'ELR' },
];
const accountingOptionView = [
	{ name: 'MTD', value: 'mtd' },
	{ name: 'YTD', value: 'ytd' },
];
const modelsOptionView = [
	{ name: 'Count', value: 'count' },
	{ name: 'Amount', value: 'amount' },
];
const productsOptionView = [
	{ name: 'Default', value: 'default' },
	{ name: 'Count', value: 'count' },
	{ name: 'Penetration', value: 'pen' },
];

const ReportOptionPickerDynamic = () => {
	const states = useStore(state => state.states);
	const setStates = useStore(state => state.setStates);
	const sourceOfReport = useStore(state => state.sourceOfReport);
	const [toggle, setToggle] = useState(false);
	const [options, setOptions] = useState(accountingOptionView);

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
	};

	useEffect(() => {
		if (sourceOfReport === 'readReptAccMS.php')
			setOptions(accountingOptionView);
		if (sourceOfReport === 'readReptModelsMS.php') setOptions(modelsOptionView);
		if (sourceOfReport === 'readReptProductsMS.php') setOptions(productsOptionView);
	}, [sourceOfReport]);

	return (
		<div className='relative ' ref={ref}>
			<button
				type='button'
				onClick={handleToggle}
				className={`w-32 h-12 px-4 flex justify-between items-center border-2 border-neutrals-900 bg-dark-accent-dark rounded font-baloo text-sm text-gray-50 hover:border-primary-purple-600 transition-colors ${toggle && 'border-primary-purple-600 bg-primary-purple-600'
					}`}
			>
				<div className='flex items-center gap-2'>
					<ProcessorIcon />
					<p>{states.name}</p>
				</div>
				<ArrowDownIcon className={`duration-300 ${toggle && 'rotate-180'}`} />
			</button>
			{toggle && (
				<div className='absolute z-30 top-16 right-0 max-h-80 flex flex-col p-3 w-42 bg-dark-accent-dark rounded-xl overflow-hidden'>
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

export default ReportOptionPickerDynamic;
