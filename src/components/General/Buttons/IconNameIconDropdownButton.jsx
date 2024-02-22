import { useState } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import Decision from '@/components/General/Icons/Decision';

export default function IconNameIconDropdownButton({
	iconName = 'Home',
	width = 'w-[254px]',
	height = 'h-[50px]',
	text = 'Select Department',
	borderRadius = 'rounded-xl',
	background = 'bg-neutrals-800',
	border = 'border border-[2px] border-neutrals-900',
	backgroundHover = 'hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300',
	borderHover = 'hover:border-purple-600',
	font = 'font-[600] font-baloo text-[15px] leading-[26px] text-[#EEECF1]',
	activeStyle = 'bg-[#2e2]',
}) {
	const [showItems, setShowItems] = useState(false);

	return (
		<div className='relative'>
			<button
				onClick={() => setShowItems(!showItems)}
				className={`flex flex-row py-[12px] px-[14px] items-center justify-between ${border} ${width} ${height} ${background} ${borderRadius} ${backgroundHover} ${borderHover} ${showItems
					? activeStyle
					: 'bg-[#05081E] border-2 border-[#212A43]'
					} transition-colors shadow-[0_13px_25px_-13px_rgba(0,0,0,0.48)]`}
			>
				<Decision name={iconName} />
				<span className={`flex flex-align-center ${font}`}>
					{text}
				</span>
				<ArrowDownIcon
					className={`duration-300 ${showItems ? 'rotate-180' : ''}`}
				/>
			</button>
		</div>
	);
}
