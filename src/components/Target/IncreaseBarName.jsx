import RangeBar from '@/components/General/RangeBar';
import { increaseStatus } from '@/utils/helperFunctions';


function IncreaseBarName ({
	value,
	increase,
	percentage,
	name,
	targetValue,
	realValue,
}) {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='flex flex-col items-start justify-end w-[145px] h-[48px] mt-2'>
			<div className='flex flex-row justify-center items-center space-x-2 font-baloo font-bold text-[20px] text-white'>
				<p>${value}</p>
				<div className='flex flex-row space-x-2'>
					<img src={icon} href='increase icon' />
					<p className={`font-bold text-[10px] ${textColor}`} >
						{percentage}%
					</p>
				</div>
			</div>
			<RangeBar targetValue={targetValue} realValue={realValue} />
			<p className='font-medium text-white font-baloo text-[10px] mt-[-6px]'>
				{name}
			</p>
		</div>
	);
}

export default IncreaseBarName;
