import { useState } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import { useStore } from '@/store/store';

const ReportViewPicker = ({ options }) => {
	const [toggle, setToggle] = useState(false);
	const states = useStore(state => state.states);
	const setStates = useStore(state => state.setStates);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleSelectionClick = (name, value) => {
		const states = { name, value };
		setStates(states);
		setToggle(false);
	};

	return (
		<div className='relative '>
			<button
				type='button'
				onClick={handleToggle}
				className={`w-52 h-12 px-4 flex justify-between items-center border-2 border-neutrals-900 bg-dark-accent-dark rounded font-baloo text-sm text-gray-50 hover:border-purple-600 transition-colors ${
					toggle && 'border-purple-600'
				}`}
			>
				<p>{states.name}</p>
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

export default ReportViewPicker;
