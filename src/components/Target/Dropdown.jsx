import { useState } from 'react';

import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import Icon from '@/components/General/Icons/Decision';


export default function Dropdown ({
	name = 'Target',
	width = 'w-[144px]',
	hight = 'h-[50px]',
	items = [
		{
			id: 'dd-item-0',
			name: 'Target 1',
			click: () => console.log('clicked 1'),
			selected: false,
		},
		{
			id: 'dd-item-1',
			name: 'Target 2',
			click: () => console.log('clicked 2'),
			selected: false,
		},
		{
			id: 'dd-item-2',
			name: 'Add Target preset',
			click: () => console.log('clicked 3'),
			selected: true,
		},
	],
}) {
	const [showItems, setShowItems] = useState(false);

	return (
		<div className='relative'>
			<button
				onClick={() => setShowItems(!showItems)}
				className={`flex flex-row py-[12px] px-[14px] items-center ${width} ${hight} justify-between ${showItems
					? 'border-primary-purple-600 bg-primary-purple-600'
					: 'bg-[#05081E]'
					} transition-colors border-[2px] border-solid border-[#212A43] shadow-[0px_13px_25px_-13px_rgba(0, 0, 0, 0.48)] rounded-[10px] hover:border-primary-purple-600 hover:bg-[#161A3E]`}
			>
				<Icon name={name} />
				<span className='font-[600] font-baloo text-[15px] leading-[26px] text-[#EEECF1]'>
					{name}
				</span>
				<ArrowDownIcon
					className={`duration-300 ${showItems ? 'rotate-180' : ''}`}
				/>
			</button>
			{showItems && (
				<div className='absolute top-[52px] left-0 z-10 flex flex-col gap-2 items-start p-2 bg-[#05081E] rounded-[12px] w-[181px]'>
					{items.map(item => (
						<button
							key={item.id}
							className={`w-full h-[32px] font-baloo font-[600] text-sm text-[#FFFFFF] ${item.selected
								? 'text-center bg-primary-purple-600 rounded-[5px] px-2'
								: 'px-3 text-start'
								}`}
							onClick={item.click}
						>
							{item.name}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
