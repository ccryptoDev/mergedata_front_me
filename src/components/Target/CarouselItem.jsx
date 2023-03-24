import FilterIcon from '@/assets/svg/filter_icon.svg';
import SquareCircleDiamondIcon from '@/assets/svg/square_circle_diamond_icon.svg';
import { increaseStatus } from '@/utils/helperFunctions';


export default function CarouselItem ({
	increase = 'up',
	name = 'lease sales',
	amount = '3,241',
	percentage = '1.3',
}) {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='w-[315px] h-[126px] flex pr-2 border-r-2 border-dotted border-neutral-700 '>
			<div className='flex flex-col p-6 justify-center items-center '>
				<div className='flex gap-4'>
					<img src={SquareCircleDiamondIcon} />
					<div className='flex flex-col justify-between w-[181px] h-[70px]'>
						<span className='font-[700] text-sm text-[#6A6A9F] uppercase'>
							{name}
						</span>
						<div className='flex gap-2'>
							<span className='font-bold font-baloo text-5xl  text-[#FFFFFF]'>
								${amount}
							</span>
							<div className='flex items-end pb-1'>
								<img
									src={icon}
									className='pb-[6px] pr-1'
								/>
								<span
									className={`font-bold font-baloo text-sm  ${textColor}`}
								>
									{percentage}%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex p-3'>
				<img className='w-3 h-3' src={FilterIcon} />
			</div>
		</div>
	);
}
