import { useState, useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import TargetIcon from '@/components/General/Icons/TargetIcon';
import { truncateString } from '@/utils/helperFunctions';
import { usePage } from '@/hooks/usePage';
import { useStore } from '@/store/store';


const targets = [
	{ id: 1, name: 'Prior Month', label: 'Prior Month' },
	{ id: 2, name: 'SMLY', label: 'SMLY' },
	{ id: 3, name: '3 Months Avg', label: '3 Months Avg' },
];

const TargetSelector = ({
	addTarget = false,
	onAddTarget,
}) => {
	const setComp = useStore(state => state.setComp);
	const { target, setTarget } = useContext(ReportsContext);
	const [downloadToggle, setDownloadToggle] = useState(false);
	const { moveToPage } = usePage();

	const handleDownloadToggle = () => {
		setDownloadToggle(!downloadToggle);
	};

	const handleSelectItem = item => {
		setTarget([item]);
		setComp(item.id);
		setDownloadToggle(false);
	};

	const AddTargetBtn = () => {
		return (
			<button
				onClick={() => moveToPage('/targets/preset')}
				className='w-full flex items-center justify-center p-2 bg-dark-accent-00 rounded-xl border-2 border-[#212A43] hover:border-2 hover:border-primary-purple-600 hover:bg-dark-accent-00'
			>
				<p className='font-baloo text-sm'>Add Target Preset</p>
			</button>
		);
	};

	return (
		<div className='w-auto h-[3.12em] '>
			<div
				className={`${downloadToggle && 'bg-primary-purple-800 '
					} relative w-auto h-[3.12em] flex items-center px-auto bg-[#05081E] rounded-xl border-2 border-[#212A43] hover:border-2 hover:border-primary-purple-600 hover:bg-dark-accent-00 `}
			>
				<button
					onClick={() => handleDownloadToggle()}
					className='w-auto flex items-center justify-between px-[1rem] gap-x-[0.75rem] font-baloo font-semibold text-[0.9375rem] leading-[1.625rem] text-neutrals-50'
				>
					<div className='flex flex-row w-auto h-auto px-0 items-center justify-center 2xl:scale-[1.0] 4xl:scale-[1.0]'>
						<TargetIcon width={22} height={22} fill='#8B93A9' />
					</div>
					<span className={`px-[2px] `}>
						{truncateString(target?.map(target => target.name).toString(), 16)}
					</span>
					<div className={`flex flex-row w-auto h-auto px-[1px] items-center justify-center `}>
						<ArrowDownIcon
							className={`duration-300 ${downloadToggle && 'rotate-180'}`}
						/>
					</div>

				</button>
				{downloadToggle && (
					<div
						className={`absolute top-[52px] left-0 w-full flex flex-col gap-2 p-2 text-neutrals-50  bg-[#05081E] rounded-md z-30`}
					>
						<div>
							{targets.map((item, index) => (
								<button
									key={index}
									onClick={() => handleSelectItem(item)}
									className={`${target.findIndex(target => target.id === item.id) !== -1 && 'bg-primary-purple-600'
										} w-full p-2 mb-2 font-baloo text-left text-sm rounded-md hover:bg-primary-purple-600`}
								>
									{truncateString(item.name, 16)}
								</button>
							))}
							<div className='border-b border-b-neutrals-600 border-dashed mb-[10px]'></div>
							{addTarget && <AddTargetBtn />}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TargetSelector;
