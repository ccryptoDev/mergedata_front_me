import RangeBar from '@/components/General/RangeBar';
import DonutIcon from '@/components/General/Icons/DonutIcon';
import { increaseStatus } from '@/utils/helperFunctions';


const IconNameBarIncrease = ({
	title = 'New Retail',
	increase = 'down',
	barColor = 'bg-gradient-to-r from-[#4DA1FF] to-[#4DFFDF]',
	realValue,
	targetValue,
	value = '6,466',
	percentage = '10%',
	donutIcon = false,
}) => {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='flex justify-between items-center'>
			{donutIcon && <DonutIcon initialColor={barColor.slice(23, 30)} finalColor={barColor.slice(36, 43)} />}
			<p className='font-public text-white text-[16px] font-normal w-[96px]'>
				{title}
			</p>
			<div className='w-[88px]'>
				<RangeBar
					barColor={barColor}
					realValue={realValue}
					targetValue={targetValue}
				/>
			</div>
			<p className='w-16 font-baloo text-white text-[19px] font-bold text-right'>
				{value}
			</p>
			<div className='flex w-[31px] items-center justify-center'>
				<img src={icon} />
				<p className={`font-baloo ${textColor} text-[12px] font-bold`}>
					{percentage}%
				</p>
			</div>
		</div>
	);
};

export default IconNameBarIncrease;
