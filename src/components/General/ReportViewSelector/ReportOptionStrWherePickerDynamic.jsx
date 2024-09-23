import { useState, useEffect } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import { useStore } from '@/store/store';
import useClickOutside from '@/hooks/useClickOutside';
import { ProcessorIcon } from '@/components/General/Icons/ProcessorIcon';


const modelsOptionView = [
	{ name: 'Cars', value: "WHERE \"ReportLineId\" = 11250 and \"ColumnIndex\" = 1" },
	{ name: 'Trucks', value: "WHERE \"ReportLineId\" = 11256 and \"ColumnIndex\" = 1" },
];
const productsOptionView = [
	{ name: 'New', value: "and NS.\"Condition\" = 'New'" },
	{ name: 'Used', value: "and NS.\"Condition\" = 'Used'" },
];

const ReportOptionStrWherePickerDynamic = () => {
	const strWhere = useStore(state => state.strWhere);
	const setStrWhere = useStore(state => state.setStrWhere);
	const sourceOfReport = useStore(state => state.sourceOfReport);
	const [toggle, setToggle] = useState(false);
	const [selected, setSelected] = useState('');
	const [options, setOptions] = useState(productsOptionView);

	const ref = useClickOutside(() => {
		setToggle(false);
	});

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleSelectionClick = (name, value) => {
		setSelected(name);
		setStrWhere(value);
		setToggle(false);
	};

	useEffect(() => {
		if (sourceOfReport === 'readReptModelsMS.php') {
			setOptions(modelsOptionView);
			setSelected(modelsOptionView[0].name);
		}
		if (sourceOfReport === 'readReptProductsMS.php') {
			setOptions(productsOptionView);
			setSelected(productsOptionView[0].name);
		}
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
					<p>{selected}</p>
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

export default ReportOptionStrWherePickerDynamic;
