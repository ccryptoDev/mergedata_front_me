import { useState } from 'react';

import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import Decision from '@/components/General/Icons/Decision';

export default function IconNameIconDropdownButton({
	iconName = 'Home',
	width = 'w-[254px]',
	heigth = 'h-[50px]',
	text = 'Select Department',
}) {
	const [showItems, setShowItems] = useState(false);

	return (
		<div className='relative'>
			<button
				onClick={() => setShowItems(!showItems)}
				className={`flex flex-row py-[12px] px-[14px] items-center ${width} ${heigth} justify-between ${showItems
					? 'border-primary-purple-600 bg-primary-purple-600'
					: 'bg-[#05081E] border-2 border-[#212A43]'
					} transition-colors shadow-[0px_13px_25px_-13px_rgba(0, 0, 0, 0.48)] rounded-[10px] hover:border-primary-purple-600 hover:bg-[#161A3E]`}
			>
				<Decision name={iconName} />
				<span className='flex flex-align-center font-[600] font-baloo text-[15px] leading-[26px] text-[#EEECF1]'>
					{text}
				</span>
				<ArrowDownIcon
					className={`duration-300 ${showItems ? 'rotate-180' : ''}`}
				/>
			</button>
		</div>
	);
}
