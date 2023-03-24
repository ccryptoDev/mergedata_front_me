import RangeBar from '@/components/General/RangeBar';
import { increaseStatus } from '@/utils/helperFunctions';


const ValueBarIncrease = ({
	dataValue,
	variable,
	increase,
	percentage,
	targetValue,
	realValue,
}) => {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='flex flex-col w-[86px] h-[62px]'>
			<p className='font-baloo text-[20px] leading-5 font-bold mb-[12px] w-[43px] h-[20px] text-neutrals-00'>
				{dataValue}
			</p>
			<RangeBar targetValue={targetValue} realValue={realValue} />
			<div className='flex justify-between mt-[12px] items-center'>
				<p className='font-baloo font-normal text-[14px] leading-[14px] text-neutrals-00'>
					{variable}
				</p>
				<div className='flex w-[27px] h-[12px] items-center justify-between'>
					<img src={icon} />
					<p className={`font-baloo text-[10px] leading-3 font-bold ${textColor}`}>
						{percentage}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ValueBarIncrease;
