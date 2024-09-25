import { useState } from 'react';

import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import Icon from '@/components/General/Icons/Decision';

export default function Dropdown ({
	iconName = 'Target',
	name = 'Prior Month',
	width = 'w-[9em]',
	hight = 'h-[3.125em]',
	items = [
		{
			id: 'dd-item-0',
			name: 'Prior Month',
			click: () => console.log('clicked 1'),
			selected: true,
		},
		{
			id: 'dd-item-1',
			name: 'SMLY',
			click: () => console.log('clicked 2'),
			selected: false,
		},
		{
			id: 'dd-item-2',
			name: '3 Months Avg',
			click: () => console.log('clicked 3'),
			selected: false,
		},
		{
			id: 'dd-item-3',
			name: 'Add Target Preset',
			click: () => console.log('clicked 3'),
			selected: false,
		},
	],
	showOptionSelected = false
}) {
	const [showItems, setShowItems] = useState(false);

	const nameSelected = items?.find(item => item.selected)?.name;
	return (
		<div className='relative w-[auto]'>
			<button
				onClick={() => setShowItems(!showItems)}
				className={`flex flex-row py-[0.75em] px-[0.875em] items-center ${width} ${hight} justify-between ${showItems
					? 'border-primary-purple-600 bg-primary-purple-600'
					: 'bg-[#05081E]'
					} transition-colors border-[2px] border-solid border-[#212A43] shadow-[0px_13px_25px_-13px_rgba(0, 0, 0, 0.48)] rounded-md hover:border-primary-purple-600 hover:bg-[#161A3E]`}
			>
				<Icon name={iconName} />
				<span className='font-[600] font-baloo text-[15px] leading-[26px] text-[#EEECF1]'>
					{showOptionSelected ? nameSelected : name}
				</span>
				<ArrowDownIcon
					className={`duration-300 ${showItems ? 'rotate-180' : ''}`}
				/>
			</button>
			{showItems && (
				<div className='absolute top-[52px] left-0 z-50 flex flex-col gap-2 items-start p-2 bg-[#05081E] rounded-[12px] w-[181px]'>
					{items.map(item => (
						<button
							key={item.id}
							className={`w-full h-[2em] font-baloo font-[600] text-sm text-[#FFFFFF] text-center ${item.selected
								? 'bg-primary-purple-600 rounded-[0.3125em] px-2'
								: 'px-3'
								}`}
							onClick={() => {
								item.click();
								setShowItems(false);
							}}
						>
							{item.name}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
