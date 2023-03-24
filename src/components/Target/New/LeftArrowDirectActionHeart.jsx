import { useState } from 'react';
import LeftIcon from '@/components/General/Icons/LeftArrowIcon';
import HeartIcon from '@/components/General/Icons/HeartIcon';

export default function LeftArrowDirectActionHeart({
	iconName = 'LeftArrow',
	upperName = 'Integrations',
	buttonName = 'Auto/Mate',
	heartLike = true,
	bgColor = 'bg-dark-background-00',
	onClick,
}) {
	const [showAddToFavorites, setShowAddToFavorites] = useState(false);
	return (
		<div className='flex flex-row items-end my-[30px] '>
			<div
				className={`ml-2 h-[50px] max-w-max rounded-[4px] flex flex-row p-[1px] ${bgColor}`}
			>
				<div
					className='h-[44px] w-[44px] aspect-[1/1] bg-[#6043dd] rounded-full flex justify-center items-center mr-[23px] cursor-pointer'
					onClick={onClick}
				>
					<LeftIcon IconName={iconName} className='w-[13px] h-[9,5px]' />
				</div>
				<div className=''>
					<div className='font-sans font-normal text-[#ffffff] text-[12px] whitespace-nowrap h-[18px] flex items-center mb-[-8px]'>
						{upperName}
					</div>
					<div className='flex flex-row max-w-max items-center'>
						<div className='max-w-max h-[48px] font-baloo font-bold mr-[14px] text-[#ffffff] text-[32px] whitespace-nowrap leading-[48px] '>
							{buttonName}
						</div>
						<div
							onMouseOver={() => setShowAddToFavorites(true)}
							onMouseLeave={() => setShowAddToFavorites(false)}
							className={`${
								!showAddToFavorites
									? 'bg-[#161A3E] rounded-[8px] w-[28px] h-[30px] text-[#ffffff] flex justify-center items-center'
									: 'bg-[#0D102C] rounded-[8px] w-[28px] h-[30px] text-[#ffffff] flex justify-center items-center'
							}`}
						>
							<div className='items-center justify-end whitespace-nowrap cursor-pointer'>
								{heartLike === true ? (
									<HeartIcon className='w-[13px] h-[12,1px]' />
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex text-center ml-[-3px]'>
				<div className='text-center my-auto text-[14px] leading-[30px]'>
					<div
						className={`${
							showAddToFavorites
								? 'opacity-97 transition-opacity duration-1000 easy-in w-[120px] rounded-r-[6px] bg-[#0D102C] text-[#ffffff] '
								: 'opacity-0'
						}`}
					>
						Add as favorite
					</div>
				</div>
			</div>
		</div>
	);
}
