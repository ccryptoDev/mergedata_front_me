import { useState } from 'react';
import LeftIcon from '@/components/General/Icons/LeftArrowIcon';
import Decision from '@/components/General/Icons/Decision';

export default function LeftArrowDirectActionHeart({
	iconName = 'LeftArrow',
	upperName = 'Integrations',
	buttonName = 'Auto/Mate',
	heartLike = true,
	bgColor = 'bg-dark-background-00',
	onClick,
}) {
	const [showFlag, setShowFlag] = useState(false);

	return (
		<div className='flex flex-row items-end '>
			<div
				className={`ml-[0.5rem] h-[3.125rem] max-w-max rounded-[0.25rem] flex flex-row items-center p-[0.0625rem] ${bgColor}`}
			>
				<div
					className='h-[2.75rem] w-[2.75rem] aspect-[1/1] bg-[#6043dd] rounded-full flex justify-center items-center mr-[1.4375rem] cursor-pointer'
					onClick={onClick}
				>
					<LeftIcon IconName={iconName} className='w-[0.81rem] h-[0.56rem]' />
				</div>
				<div className='h-[3.6em] flex flex-col justify-between'>
					<div className='z-40 font-sans font-normal text-[#ffffff] text-[12px] whitespace-nowrap h-[1.1rem] flex items-center mb-[-0.5rem]'>
						{upperName}
					</div>
					<div className='flex flex-row max-w-max items-center z-0'>
						<div
							className={`z-20 max-w-max h-[w-[22.1em] h-auto leading-[2rem] font-baloo font-bold pr-[1.5rem] mr-[-2px] text-[#ffffff] text-[2rem] whitespace-nowrap ${bgColor}`}
						>
							{buttonName}
						</div>
						{heartLike ? (
							<div className=' w-auto h-auto flex flex-row items-center'>
								<div
									onMouseOver={() => setShowFlag(true)}
									onMouseLeave={() => setShowFlag(false)}
									className='bg-[#161A3E] rounded-[0.5em] w-[1.875em] h-[1.875em] text-[#ffffff] flex flex-row justify-center items-center z-30'
								>
									<Decision name='Heart' />
								</div>
								<div
									className={`bg-[#161A3E] w-auto px-[0.75em] rounded-r-[0.625em] h-[2em] text-[#ffffff] flex justify-center items-center text-[0.875rem] ml-[-0.3125em] 
									${
										showFlag
											? 'translate-x-0 opacity-70'
											: 'translate-x-[-8.75em] opacity-0'
									} easy-in-out duration-500 z-10`}
								>
									Add as favorite
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
